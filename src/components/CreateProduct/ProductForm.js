import { useState } from "react";

function ProductForm(props) {
  let [pName, updateName] = useState("");
  let [pPrice, updatePrice] = useState("");
  let [pDescription, updateDescription] = useState("");
  let [pAvailable, updateAvailabliity] = useState(false);
  let [pImageUrl, updateImageUrl] = useState("");

  // let [userInput, updateUserInput] = useState({
  //   pName: "",
  //   pPrice: "",
  //   pDescription: "",
  //   pAvailable: "",
  //   pImageUrl: "",
  // });

  function nameInputHandler(event) {
    // updateUserInput({ ...userInput, pName: event.target.value });
    // updateUserInput((prevState) => {
    //   return { ...prevState, pName: event.target.value };
    // });
    updateName(event.target.value);
  }
  function priceInputHandler(event) {
    // updateUserInput({ ...userInput, priceInputHandler: event.target.value });
    updatePrice(event.target.value);
  }
  function descriptionInputHandler(event) {
    // updateUserInput({ ...userInput, descriptionInputHandler: event.target.value });
    updateDescription(event.target.value);
  }
  function availabilityInputHandler(event) {
    // updateUserInput({ ...userInput, availabilityInputHandler: event.target.checked });
    updateAvailabliity(event.target.checked);
  }
  function imageInputHandler(event) {
    // updateUserInput({ ...userInput, imageInputHandler: event.target.value });
    updateImageUrl(event.target.value);
  }

  function createProductEventHandler(event) {
    event.preventDefault();

    let product = {
      pID: 1,
      pName: pName,
      desc: pDescription,
      isAvailable: Boolean(pAvailable),
      image: pImageUrl,
      price: Number(pPrice),
    };
    updateName("");
    updateAvailabliity(false);
    updateDescription("");
    updateImageUrl("");
    updatePrice("");

    props.createProduct(product);
    props.onCancel();
    // console.log(product);
  }
  return (
    <form className="row g-3" onSubmit={createProductEventHandler}>
      <div className="col-md-6">
        <label for="name">Product Name</label>
        <input
          onChange={nameInputHandler}
          type="text"
          className="form-control"
          id="name"
          value={pName}
          placeholder="Product Name"
        />
      </div>
      <div className="col-md-6">
        <label for="price">Product Price</label>
        <input
          onChange={priceInputHandler}
          type="number"
          min="0.01"
          step="0.01"
          className="form-control"
          id="price"
          value={pPrice}
          placeholder="Product Price"
        />
      </div>

      <div className="form-group">
        <label for="description">Product Description</label>
        <input
          onChange={descriptionInputHandler}
          type="text"
          className="form-control"
          id="description"
          placeholder="Product Description"
          value={pDescription}
        />
      </div>

      <div class="form-check form-switch">
        <input
          onChange={availabilityInputHandler}
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="isAvailable"
          checked={pAvailable}
        />
        <label class="form-check-label" for="isAvailable">
          Is product available in stock?
        </label>
      </div>

      <div className="form-group">
        <label for="select-image">Select product image</label>
        <input
          type="file"
          className="form-control"
          id="select-image"
          onChange={imageInputHandler}
          value={pImageUrl}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Product
      </button>
      <button type="button" className="btn btn-danger" onClick={props.onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default ProductForm;
