import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Icon } from "semantic-ui-react";
import { selectedProduct } from "../redux/actions/productActions";
import "./productlisting.css";
import _ from "lodash";
import "./category.css";
import { SuccessToast } from "../utils/ProjectToast";
import { ToastContainer } from "react-toastify";

export default function ProductComponent() {
  const meats = useSelector((state) => state.allProducts.products);
  const orderLimit = useSelector((state) => state.orderLimit.maxOrderKG);
  const dispatch = useDispatch();
  const [allMeats, setAllMeats] = useState([]);

  useEffect(() => {
    setAllMeats(meats);
  }, []);

  const addtoCart = (product) => {
    dispatch(selectedProduct(product));
    setTimeout(() => {
      SuccessToast("Product added to cart");
    }, 500);
  };

  const loadMeats = () => {
    return allMeats.map((m, index) => {
      const {
        id,
        imageurl,
        title,
        price,
        isdiscount,
        discountpercentage,
        quantity,
        totalamount,
      } = m;
      return (
        <div className="shopcard card-outer" key={id}>
          <div className="shopimage">
            <img src={imageurl} />
            <div className={isdiscount ? "discount" : "dishidden"}>
              <span>{discountpercentage}%</span>
            </div>
          </div>
          <div className="shopheader">
            <h3>{title}</h3>
          </div>
          <div className="shopfooter">
            <div className="shopadd">
              <a
                onClick={() => {
                  const copy = _.clone(allMeats);
                  const extract = copy[index];
                  _.set(
                    extract,
                    "quantity",
                    extract.quantity > 1
                      ? extract.quantity - 1
                      : extract.quantity
                  );
                  if (extract.quantity <= orderLimit)
                    _.set(extract, "totalamount", price * extract.quantity);
                  copy[index] = extract;
                  setAllMeats(copy);
                  addtoCart(extract);
                }}
              >
                <Icon name="minus" />
              </a>
              <input id={id} type="number" value={quantity} readOnly />
              <a
                onClick={() => {
                  const copy = _.clone(allMeats);
                  const extract = copy[index];
                  _.set(
                    extract,
                    "quantity",
                    extract.quantity < orderLimit
                      ? extract.quantity + 1
                      : extract.quantity
                  );
                  if (extract.quantity <= orderLimit)
                    _.set(extract, "totalamount", price * extract.quantity);
                  copy[index] = extract;
                  setAllMeats(copy);
                  addtoCart(extract);
                }}
              >
                <Icon name="plus" />
              </a>
            </div>
            <div className="shopprice">Rs : ₹{price}/Kg</div>
          </div>
          <div className="shopaddtocart">
            <Button
              animated="fade"
              className="cartbutton"
              onClick={() => {
                addtoCart(m);
              }}
            >
              <Button.Content visible>
                <Icon name="add to cart" /> Add to cart
              </Button.Content>
              <Button.Content hidden>₹{totalamount}</Button.Content>
            </Button>
          </div>
          <ToastContainer />
        </div>
      );
    });
  };
  return (
    <div className="productlist">
      <div className="radio-inputs">
        <label className="radio">
          <input type="radio" name="radio" />
          <span className="name">HTML</span>
        </label>
        <label className="radio">
          <input type="radio" name="radio" />
          <span className="name">React</span>
        </label>

        <label className="radio">
          <input type="radio" name="radio" />
          <span className="name">Vue</span>
        </label>
      </div>
      {/* <div id="firstFilter" className="filter-switch">
        <input checked id="chicken" name="options" type="radio" />
        <label className="option" htmlFor="chicken">
          Chicken
        </label>
        <input id="fish" name="options" type="radio" />
        <label className="option" htmlFor="fish">
          Fish
        </label>
        <input id="mutton" name="options" type="radio" />
        <label className="option" htmlFor="mutton">
          Mutton
        </label>
        <span className="background"></span>
      </div> */}
      <div className="mycard-container">{loadMeats()}</div>
    </div>
  );
}
