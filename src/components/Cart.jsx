import PropTypes from 'prop-types'

function Cart (props){
    const { quantity = 0 } = props;

    return (
        <div className="cart blue darken-4 white-text">
            <i className="material-icons">shopping_cart</i>
            {quantity ? <span className="cart-quantity">{quantity}</span> : null }
        </div>
    )

}

Cart.propTypes = {
    quantity: PropTypes.number,
}

export default Cart;