import PropTypes from 'prop-types'

function BasketItem( props ) {
    const {
        mainId, 
        displayName,
        price,
        quantity,
        removeFromBasket,
        incQuantity,
        decQuantity,
    } = props;
    console.log(mainId, 
        displayName,
        price,
        quantity,);
    return(
        <li className="collection-item basket-delete">
            {displayName} x 
            <i className="material-icons basket-quantity" onClick={() => decQuantity(mainId)}>remove</i>{quantity} 
            <i className="material-icons basket-quantity" onClick={() => incQuantity(mainId)}>add</i> = {price.finalPrice * quantity } руб.

            <span  className="secondary-content" onClick={() => removeFromBasket(mainId)}>
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
    removeFromBasket: PropTypes.func,
    incQuantity: PropTypes.func,
    decQuantity: PropTypes.func,

}

export default BasketItem;