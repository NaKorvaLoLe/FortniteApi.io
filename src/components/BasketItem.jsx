import PropTypes from 'prop-types'

function BasketItem( props ) {
    const {
        mainId, 
        displayName,
        price,
        quantity,
    } = props;
    console.log(mainId, 
        displayName,
        price,
        quantity,);
    return(
        <li className="collection-item basket-delete">
            {displayName} x {quantity} = {price.finalPrice}
            <span  className="secondary-content">
                <i className="material-icons">close</i>
            </span>
        </li>
    )
    
}

BasketItem.propTypes = {
    mainId: PropTypes.string, 
    displayName: PropTypes.string,
    price: PropTypes.object,
    quantity: PropTypes.number,
}

export default BasketItem;