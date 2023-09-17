import { useState, useEffect } from "react";
import Preloader from "./Preloader.jsx";
import GoodsList from "./GoodsList.jsx";
import { API_KEY,  API_URL} from '../config.js'

function Shop(){
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);


    
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
        <main className="container content">{
            loading ? <Preloader/> : <GoodsList goods={goods}/>
        }</main>
    )
}

export default Shop;