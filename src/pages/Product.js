import React, { useContext, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import Layout from "../components/Layout";

import CartContext from "../context/CartContext";

import classes from "../pages/styles/Product.module.css";

import Ads from "../assets/150x150.png";

function Product(props) {
  // React router
  const params = useParams();
  const location = useLocation();

  // Input value
  const inputRef = useRef();

  // Context
  const ctx = useContext(CartContext);

  const addToCartHandler = () => {
    // Read value from input
    const enteredAmount = inputRef.current.value;

    // Number validation
    const enteredAmountNumber = +enteredAmount;

    ctx.addItem({
      id: location.state.id,
      name: location.state.name,
      amount: enteredAmountNumber,
      price: location.state.price,
    });
  };

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={classes.title}>
              <h2>Product {params.id}</h2>
              <p>Furniture</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 col-sm-4">
            <div className={classes.ads}>
              <h4>Ads</h4>
              <img src={Ads} />
            </div>
          </div>
          <div className="col-md-7 col-sm-8">
            <div className={classes.content}>
              <div className={classes.image}>
                <img src={location.state.image} />
              </div>
              <div className={classes.details}>
                <h4>Description</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>{" "}
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>{" "}
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className={classes.orderbox}>
              <h4>Order</h4>
              <h3>$ {location.state.price}</h3>
              <hr />
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <button type="button" className={`btn btn-primary ${classes.buy}`} onClick={addToCartHandler}>
                      Buy
                    </button>
                  </div>
                  <div className="col-md-5">
                    <input type="number" className={`form-control ${classes.input}`} defaultValue="1" ref={inputRef} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Product;
