import { useEffect } from 'react';

import PropTypes from 'prop-types';

function Alert (props){
    const { alertName = '',  closeAlert,  } = props;
    console.log(alertName);

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId)
        }
        // eslint-disable-next-line
    }, [name])

    return (
        <div id="toast-container">
            <div className='toast'>{alertName} добавлен в корзину</div>
        </div>
    )
}

Alert.propTypes = {
    alertName: PropTypes.string,
    closeAlert: PropTypes.func,
}

export default Alert;