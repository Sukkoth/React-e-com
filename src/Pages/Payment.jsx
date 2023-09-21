import { useSelector } from 'react-redux';
import FullLoader from '../components/Loaders/FullLoader';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const navigate = useNavigate();
    const order = useSelector((state) => state.order.order);
    console.log(order);
    if (order.isLoading) return <FullLoader />;
    if (!order.isLoading && order?.data?.code === '201')
        location.href = '/cart'

    if (!order.isLoading && !order?.data && !order.error) {
        navigate('/cart');
    }
};

export default Payment;
