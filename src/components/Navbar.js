import React, { useContext } from "react";
import "font-awesome/css/font-awesome.min.css";
import classes from "./styles/Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUserPlus, faUser } from "@fortawesome/free-solid-svg-icons";

import CartContext from "../context/CartContext";

import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Cart from "./cart/Cart";

const Navbar = () => {
  // Showing number of items in cart.
  const ctx = useContext(CartContext);
  console.log("Navbar", ctx);
  // Calculation
  const numberOfCartItems = ctx.items.reduce((cartNumber, item) => {
    return cartNumber + item.amount;
  }, 0);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand">
            <img src={Logo} width="100" />
          </span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/">
                <span className={`nav-link active ${classes.link}`} aria-current="page">
                  Home
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about">
                <span className={`nav-link ${classes.link}`}>About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">
                <span className={`nav-link ${classes.link}`}>Contact</span>
              </Link>
            </li>
          </ul>

          <li type="button" className={`btn btn-info ${classes.cart}`} data-bs-toggle="modal" data-bs-target="#cartModal">
            <FontAwesomeIcon icon={faCartShopping} /> Cart ({numberOfCartItems})
          </li>
          {/* <Link to="/signup"> */}
            <li className={`btn btn-primary ${classes.signup}`}>
              <FontAwesomeIcon icon={faUserPlus} /> Sign up
            </li>
          {/* </Link> */}
          {/* <Link to="/login"> */}
            <li className={`btn btn-primary ${classes.login}`}>
              <FontAwesomeIcon icon={faUser} /> Login
            </li>
          {/* </Link> */}
        </div>
      </div>
      <div className="modal fade" id="cartModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Cart
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">{!ctx.totalAmount ? "No item exist!" : <Cart />}</div>
            <div className="modal-footer">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h4 className={classes.total}>Total: $ {ctx.totalAmount}</h4>
                  </div>
                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-6">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                          Close
                        </button>
                      </div>
                      <div className="col-md-6">
                        <button type="button" className="btn btn-primary">
                          Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
