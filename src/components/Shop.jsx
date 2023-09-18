import { useState, useEffect } from "react";
import Preloader from "./Preloader.jsx";
import GoodsList from "./GoodsList.jsx";
import Cart from "./Cart.jsx";
import { API_KEY,  API_URL} from '../config.js'

function Shop(){
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState([])
   
    

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(
            orderItem => orderItem.mainId === item.mainId);
        
          
        
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            }
            
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex ) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    }
                } else {
                    return orderItem
                }
            })
            setOrder(newOrder)
        }
    }
    console.log(order);  
    
    useEffect(function getGoods(){
        fetch(API_URL, {
            headers:{
                'Authorization': API_KEY,
            }
        }).then(response => response.json())
        .then(data => {data.shop && setGoods(data.shop)});
        setLoading(false);
    }, []);

    return(
        <main className="container content">
            <Cart quantity={order.length}/>
            { 
                loading ? <Preloader/> : <GoodsList goods={goods} addToBasket={addToBasket}/>
            }
        </main>
    )
}

export default Shop;