import React from 'react';
import {useSelector} from 'react-redux'
const ProductComponent =()=>{
 const products = useSelector(state => state.allproducts.products);
const renderList = products.map((product)=>{
    const {id,title,image,price,category} = product

    return( 
        <div className="four column wide">
        <div className="ui link cards">
        <div className="card">
        <div className="image"><img src={image} alt={title} /></div>
        <div className="content"> 
        <div className="header"></div>
        </div>
        </div>
        </div>
        </div>
    )
});

return <> {renderList} </>    
}

export default ProductComponent;