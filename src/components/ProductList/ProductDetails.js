import { useState } from "react";
import Button from "./Button";

function ProductDetails(props) {
  console.log("productDetails was clicked");

  let badgeClass = "badge-margin-left-40 badge ";
  badgeClass += props.isAvailable ? "bg-success" : "bg-danger";

  //let productCount = 0;
  let [productCount, updateCount] = useState(0);

  //let [maxNumberCount, updateMaxNumberCount] = useState('')

  // function maxiNumberCount() {
  //   updateMaxNumberCount(props.stock)
  // }

  function displayFormattedProductCount() {
    return productCount > 0 ? productCount : "Zero";
  }

  let decrementProductCount = function () {
    // productCount--;
    //console.log(productCount);
    updateCount(--productCount);
  };

  let incrementProductCount = function () {
    // productCount++;
    // console.log(productCount);
    updateCount(++productCount);
  };

  return (
    <div className="d-flex align-items-center justify-content-start mt-1">
      <h6 className="font-weight-bold my-2" style={{ marginRight: 30 }}>
        ${props.price}
      </h6>
      <Button eventHandler={decrementProductCount} disable={productCount === 0}>
        -
      </Button>
      <span style={{ padding: "0px 20px", fontSize: 13 }}>
        {displayFormattedProductCount()}
      </span>
      <Button eventHandler={incrementProductCount}>+</Button>
      <span className={badgeClass}>
        {props.isAvailable ? "Available" : "Unavailable"}
      </span>
    </div>
  );
}

export default ProductDetails;
