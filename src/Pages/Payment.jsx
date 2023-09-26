import { useSelector } from 'react-redux';
import FullLoader from '../components/Loaders/FullLoader';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config/env';
import { useEffect } from 'react';

const Payment = () => {
    const navigate = useNavigate();
    const order = useSelector((state) => state.order.order);
    useEffect(() => {
        if (!order.isLoading && !order?.data && !order.error) {
            navigate('/cart');
        }
    }, [order.isLoading, order?.data, navigate, order.error]);

    console.log(order);
    if (order.isLoading) return <FullLoader />;
    if (!order.isLoading && order?.data?.code === '201')
        return (location.href =
            API_URL +
            `/create-checkout-session?orderId=${order?.data?.order?._id}`);
};

export default Payment;
