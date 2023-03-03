import Products from "./Products";
//import { useState } from "react";


function ProductList(props) {
  //console.log(props.newProduct);
  
  // if (props.newProductList.length === 0){
  //   return <h3>no product is available</h3>
  // }
  return props.newProductList.length ===0 ? <h3>no product is available</h3>  : (
   
        <ul className="list-group shadow">
          {props.newProductList.map((product) => {
            return (
              <Products
                key={product.pID}
                name={product.pName}
                desc={product.desc}
                isAvailable={product.isAvailable}
                image={product.image}
                price={product.price}
                stock={product.stock}
              ></Products>
            );
          })}
        </ul>
   
  );
}

export default ProductList;
