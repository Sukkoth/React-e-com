import PropTypes from 'prop-types';
import './fullScreenErrorMessageStyle.css';
import Card from '../MessageCard/Card';
import serverErrorIcon from '../../assets/500.png';
import noConnectionIcon from '../../assets/no-connection.png';
import notFoundIcon from '../../assets/404.png';
import oopSErrorIcon from '../../assets/oops.png';

const FullScreenErrorMessage = ({ error }) => {
    if (error?.code === 500) {
        return (
            <Card
                header={500}
                text='Internal Server Error Encountered'
                image={serverErrorIcon}
                btnText='Homepage'
                link='/'
            />
        );
    } else if (error?.code === 400) {
        return (
            <Card
                header={400}
                text='Bad Request'
                image={serverErrorIcon}
                btnText='Homepage'
                link='/'
            />
        );
    } else if (error?.code === 404) {
        return (
            <Card
                header={404}
                text='The page you are looking for is not found'
                image={notFoundIcon}
                btnText='Homepage'
                link='/'
            />
        );
    } else if (error?.code === 'ERR_NETWORK') {
        return (
            <Card
                header='Network error'
                text='The server is not responding currently'
                image={noConnectionIcon}
                btnText='Homepage'
                link='/'
            />
        );
    } else {
        return (
            <Card
                header='Oops . . .'
                text='Something went wrong, we will fix it shortly'
                image={oopSErrorIcon}
                btnText='Homepage'
                link='/'
            />
        );
    }
};

FullScreenErrorMessage.defaultProps = {
    error: {
        message: 'Something Went Wrong!',
    },
};

FullScreenErrorMessage.propTypes = {
    error: PropTypes.object,
};

export default FullScreenErrorMessage;
