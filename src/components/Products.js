import { Link } from "react-router-dom";

import classes from "./styles/Products.module.css";

// Product's images
import P1 from "../assets/products/1.png";
import P2 from "../assets/products/2.png";
import P3 from "../assets/products/3.png";
import P4 from "../assets/products/4.png";
import P5 from "../assets/products/5.png";
import P6 from "../assets/products/6.png";
import P7 from "../assets/products/7.png";
import P8 from "../assets/products/8.png";

function Products() {
  return (
    <div className={classes["page-content-product"]}>
      <div className={classes["main-product"]}>
        <div className="container">
          <div className="row clearfix">
            <div className="col-lg-3 col-sm-6 col-md-3">
              <Link to="/product/1" state={{image: P1, id:1, name:"Product 1", price: 1000}}>
                <div className={classes["box-img"]}>
                  <h4>Product 1</h4>
                  <img src={P1} />
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-3">
              <Link to="/product/2" state={{image: P2, id:2, name:"Product 2", price: 1100}}>
                <div className={classes["box-img"]}>
                  <h4>Product 2</h4>
                  <img src={P2} />
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-3">
              <Link to="/product/3" state={{image: P3, id:3, name:"Product 3", price: 1200}}>
                <div className={classes["box-img"]}>
                  <h4>Product 3</h4>
                  <img src={P3} />
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-3">
              <Link to="/product/4" state={{image: P4, id:4, name:"Product 4", price: 1300}}>
                <div className={classes["box-img"]}>
                  <h4>Product 4</h4>
                  <img src={P4} />
                </div>
              </Link>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-3">
              <Link to="/product/5" state={{image: P5, id:5, name:"Product 5", price: 1400}}>
                <div className={classes["box-img"]}>
                  <h4>Product 5</h4>
                  <img src={P5} />
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-3">
              <Link to="/product/6" state={{image: P6, id:6, name:"Product 6", price: 1500}}>
                <div className={classes["box-img"]}>
                  <h4>Product 6</h4>
                  <img src={P6} />
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-3">
              <Link to="/product/7" state={{image: P7, id:7, name:"Product 7", price: 1600}}>
                <div className={classes["box-img"]}>
                  <h4>Product 7</h4>
                  <img src={P7} />
                </div>
              </Link>
            </div>
            <div className="col-lg-3 col-sm-6 col-md-3">
              <Link to="/product/8" state={{image: P8, id:8, name:"Product 8", price: 1700}}>
                <div className={classes["box-img"]}>
                  <h4>Product 8</h4>
                  <img src={P8} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
