import PropTypes from 'prop-types';
import './fullScreenErrorMessageStyle.css';
import Card from '../MessageCard/Card';
import serverErrorIcon from '../../assets/500.png';

const FullScreenErrorMessage = ({ message, code }) => {
    if (code === 500) {
        return (
            <Card
                header={500}
                text='Internal Server Error Encountered'
                image={serverErrorIcon}
                btnText='Homepage'
                link='/'
            />
        );
    }
};

FullScreenErrorMessage.defaultProps = {
    message: 'Error!',
};

FullScreenErrorMessage.propTypes = {
    message: PropTypes.string,
};

export default FullScreenErrorMessage;
