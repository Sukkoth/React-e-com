import React, { useEffect } from 'react';
import './orders.styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../../features/Order/OrderService';
import formatDateToDaysAgo from '../../utils/formatDate';
import { API_URL } from '../../config/env';

import {
    BsCart4,
    BsHourglassSplit,
    BsClipboardCheck,
    BsHourglassTop,
} from 'react-icons/bs';
import { GiWallet } from 'react-icons/gi';
import { AiOutlineWarning } from 'react-icons/ai';
import { MdLocalShipping } from 'react-icons/md';
import { Link } from 'react-router-dom';

const OrdersComponent = () => {
    const dispatch = useDispatch();
    const { isLoading, error, data } = useSelector((state) => state.order);
    useEffect(() => {
        dispatch(getAllOrders());
    }, [dispatch]);

    const totalItems = data?.orders?.reduce(
        (acc, order) => acc + order.items.length,
        0
    );

    const totalPaid = Math.round(
        data?.orders
            ?.filter((order) => order.status !== 'unpaid')
            ?.reduce((acc, order) => acc + order.grandTotal, 0)
    );

    const totalUnpaid = Math.round(
        data?.orders
            ?.filter((order) => order.status === 'unpaid')
            ?.reduce((acc, order) => acc + order.grandTotal, 0)
    );

    const statusIcons = {
        unpaid: <AiOutlineWarning color='red' />,
        pending: <BsHourglassTop color='rgb(165, 165, 34)' />,
        processing: <BsHourglassSplit color='rgb(165, 165, 34)' />,
        shipped: <MdLocalShipping color='green' />,
        delivered: <BsClipboardCheck color='green' />,
    };

    return (
        <div className='orders-page'>
            <div className='orders'>
                <div className='orders-summary'>
                    <h1>Orders Summary</h1>
                    <ul>
                        <li>
                            <BsCart4 className='icon' />{' '}
                            <span>Total Items: {totalItems}</span>
                        </li>
                        <li>
                            <GiWallet
                                className='icon'
                                style={{ color: 'green' }}
                            />
                            <span>Total Paid: {totalPaid}$</span>
                        </li>
                        <li>
                            <AiOutlineWarning
                                className='icon'
                                style={{ color: 'red' }}
                            />
                            <span>Total Unpaid: {totalUnpaid}$</span>
                        </li>
                    </ul>
                </div>
                <div className='table'>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Id</th>
                                <th>Placed Date</th>
                                <th>Items</th>
                                <th>Grand Total</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {!isLoading &&
                                !error &&
                                data?.orders?.map((order, index) => (
                                    <tr key={order?._id}>
                                        <td>{index + 1}</td>
                                        <td>{order?._id}</td>
                                        <td>
                                            {formatDateToDaysAgo(
                                                order?.createdAt
                                            )}
                                        </td>
                                        <td>{order?.items?.length}</td>
                                        <td>{order?.grandTotal}</td>
                                        <td className='status'>
                                            {statusIcons[order?.status] || ''}
                                            <span>{order?.status}</span>
                                            {order?.status === 'unpaid' ? (
                                                <Link
                                                    to={`${API_URL}/create-checkout-session?orderId=${order?._id}`}
                                                >
                                                    Pay now
                                                </Link>
                                            ) : (
                                                ''
                                            )}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrdersComponent;
