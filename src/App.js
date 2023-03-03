import "./index.css";
import ProductList from "./components/ProductList/ProductList";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import { useState } from "react";
import FilterProduct from "./components/FilterProduct/FilterProduct";

let products = [
  {
    pID: 1,
    pName: "Fresh Milk",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "images/fresh-milk.png",
    price: 12,
    stock: 10,
  },
  {
    pID: 2,
    pName: "Cottage Cheese",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: false,
    image: "images/cottage-cheese.png",
    price: 10,
    stock: 3,
  },
  {
    pID: 3,
    pName: "Brocoli",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "images/brocoli.png",
    price: 15,
    stock: 5,
  },
  {
    pID: 4,
    pName: "oranges",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "images/oranges.png",
    price: 20,
    stock: 7,
  },
  {
    pID: 5,
    pName: "Olive oil",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: false,
    image: "images/olive-oil.png",
    price: 14,
    stock: 9,
  },
];

function App() {
  let [newProductList, updateProductList] = useState(products);
  let [filterTextValue, updateFilterTextValue] = useState("all");

  let filteredProductList = newProductList.filter((product) => {
    if (filterTextValue === "available") {
      return product.isAvailable === true;
    } else if (filterTextValue === "unavailable") {
      return product.isAvailable === false;
    } else {
      return product;
    }
  });

  function createProduct(product) {
    product.pID = newProductList.length + 1;
    updateProductList([product, ...newProductList]);
  }

  function onFilterValueSelected(filterValue) {
    updateFilterTextValue(filterValue);
  }
  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <CreateProduct createProduct={createProduct}></CreateProduct>
        <FilterProduct
          filterValueSelected={onFilterValueSelected}
        ></FilterProduct>
        <ProductList newProductList={filteredProductList}></ProductList>
      </div>
    </div>
  );
}

export default App;
