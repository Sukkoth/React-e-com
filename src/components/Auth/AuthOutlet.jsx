import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AuthOutlet = ({ children }) => {
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth.auth.token);
    if (auth) return children;
    else return navigate('/login');
};

export default AuthOutlet;
