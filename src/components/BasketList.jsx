import BasketItem from "./BasketItem";
import PropTypes from 'prop-types'


function BasketList (props) {
    const {
            order = [], 
            handleBasketShow, 
            removeFromBasket,
            incQuantity,
            decQuantity, 
        } = props;
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price.finalPrice * el.quantity
    }, 0)

    return ( 
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            {
                order.length ? order.map(item => (
                    <BasketItem 
                        key={item.mainId} 
                        removeFromBasket={removeFromBasket}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                        {...item}
                    />
                )) : <li className="collection-item">Корзина пуста</li>
            }
            <li className="collection-item active">
                Общая стоимость: {totalPrice} руб.
            </li>
            <li className="collection-item">
                <button  className="btn btn-small">Оформить</button>
            </li>
            <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
        </ul>
    )
}


BasketList.propTypes = {
    order: PropTypes.array,
    handleBasketShow: PropTypes.func,
    removeFromBasket: PropTypes.func,
    incQuantity: PropTypes.func,
    decQuantity: PropTypes.func,
}
export default BasketList;