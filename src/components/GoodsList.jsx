import GoodsItem from "./GoodsItem";
import PropsTypes from 'prop-types'

function GoodsList(props) {
    const {goods = []} = props;

    if (!goods.length) {
        return <h3>Nothing here</h3>
    }
    return (
        <div className="goods">
            {goods.map(item => (
                <GoodsItem key = {item.mainId} {...item}/>
            ))}
        </div>
    )
    
}


GoodsList.propTypes = {
    goods: PropsTypes.array,
}

export default GoodsList