import React from "react";

import classes from "./styles/CartItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

function CartItem(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <div className="row">
            <h3 className={classes.name}>{props.name}</h3>
          </div>
          <div className="row"></div>
        </div>
        <div className="col-md-3">
          <h4 className={classes.price}>$ {props.amount * props.price}</h4>
        </div>
        <div className="col-md-2">
          <div className="row">
            <div className="col-md-4">
              <FontAwesomeIcon icon={faPlusCircle} onClick={props.onAdd} />
            </div>
            <div className="col-md-4">
              <h4 className={classes.amount}>{props.amount}</h4>
            </div>
            <div className="col-md-4">
              <FontAwesomeIcon icon={faMinusCircle} onClick={props.onRemove} />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default CartItem;
