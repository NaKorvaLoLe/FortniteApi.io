import GoodsItem from "./GoodsItem";
import PropsTypes from 'prop-types'

function GoodsList(props) {
    const {
        goods = [],
        addToBasket,
    } = props;

    if (!goods.length) {
        return <h3>Nothing here</h3>
    }
    return (
        <div className="goods">
            {goods.map(item => (
                <GoodsItem key = {item.mainId} {...item} addToBasket={addToBasket}/>
            ))}
        </div>
    )
    
}


GoodsList.propTypes = {
    goods: PropsTypes.array,
    addToBasket: PropsTypes.func,

}

export default GoodsList