import BasketItem from "./BasketItem";
import PropTypes from 'prop-types'


function BasketList (props) {
    const {order = [], handleBasketShow} = props;
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price.finalPrice * el.quantity
    }, 0)

    return ( 
        <ul className="collection basket-list">
            <li className="collection-item active">Корзина</li>
            {
                order.length ? order.map(item => (
                    <BasketItem key={item.mainId} {...item}/>
                )) : <li className="collection-item">Корзина пуста</li>
            }
            <li className="collection-item active">
                Общая стоимость: {totalPrice} руб.
            </li>
            <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
        </ul>
    )
}


BasketList.propTypes = {
    order: PropTypes.array,
    handleBasketShow: PropTypes.func,
}
export default BasketList;