import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/ProductActions";


const ProductListing=()=>{

    const products= useSelector(state=>state)
    const dispatch = useDispatch();
    
    const fetchProducts= async()=>{
        const response = await axios.get("https://fakestoreapi.com/products")
        .catch((err)=>{
            console.log("Err",err);
        });
        dispatch(setProducts(response.data))
    }

    useEffect(()=>{
        fetchProducts();
    },[])

    

    return(
        <div className="ui grid container">
        <h1>productListing</h1>
        </div>
    ) 
}

export default ProductListing;