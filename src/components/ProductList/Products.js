//let imageUrl = require("../images/fresh-milk.png");
//let style = {
//  padding: '0px 20px',
// fontSize:14

import ProductDetails from "./ProductDetails";

//}
let isAvailable = "Available";

function Products(props) {
  console.log("products was clicked");

  return (
    <li
      className="list-group-item"
      style={{
        backgroundColor: props.isAvailable ? "white" : "#dedede",
        cursor: props.isAvailable ? "default" : "not-allowed",
      }}
    >
      <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
        <div className="media-body order-2 order-lg-1">
          <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
          <p className="font-italic text-muted mb-0 small">{props.desc}</p>
          <ProductDetails price={props.price} isAvailable={props.isAvailable} />
        </div>
        <img
          src={props.image}
          alt="Generic placeholder image"
          width="200"
          className="ml-lg-5 order-1 order-lg-2"
        />
      </div>
    </li>
  );
}

export default Products;
