import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Icon } from "semantic-ui-react";
import { selectedProduct } from "../redux/actions/productActions";
import "./productlisting.css";
import _ from "lodash";

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
        </div>
      );
    });
  };
  return <div className="mycard-container">{loadMeats()}</div>;
}
