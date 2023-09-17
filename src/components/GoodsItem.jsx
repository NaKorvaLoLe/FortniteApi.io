import PropTypes from 'prop-types'

function GoodsItem(props) {
    const {
        mainId, 
        displayName,
        displayDescription,
        price,
        displayAssets,

    } = props;

    console.log(displayAssets.full_background);
    return (
        <div className="card" id={mainId}>
            <div className="card-image">
                <img src={displayAssets[0].full_background} alt={displayName}></img>
            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>   
                <p>{displayDescription}</p>
                <div className="card-action">
                    <button className="btn">Купить</button>
                    <span className="right" style={{fontSize: '1.8rem'}}>{price.finalPrice} руб.</span>
                </div>
            </div>
        </div>
    )
}


GoodsItem.propTypes = {
    mainId: PropTypes.string, 
    displayName: PropTypes.string,
    displayDescription: PropTypes.string,
    price: PropTypes.object,
    displayAssets: PropTypes.array,
}

export default GoodsItem;