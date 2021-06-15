import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { removeSelectedProduct } from "../../redux/actions/productActions";
import "./viewcart.css";

export default function ViewcartComponent() {
  const mycarts = useSelector((state) => state.mycartItems.myCarts);
  const [subTotal, setSubTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (mycarts.length > 0) {
      setSubTotal(
        formatCurrency(
          (mycarts ?? [])
            .map((st) => st.totalamount)
            .reduce((prv, cur) => prv + cur)
        )
      );
    } else {
      setSubTotal(0);
    }
  }, [mycarts]);

  const formatCurrency = (currency) => {
    return String(currency).replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
  };

  const removeCart = (product) => {
    dispatch(removeSelectedProduct(product));
  };

  const loadCart = () => {
    return mycarts.map((c, index) => {
      return (
        <div>
          <div className="viewcontainer" key={index}>
            <div className="img">
              <Image src={c.imageurl} size="small" />
            </div>
            <div className="title">{c.title}</div>
            <div className="price myprice">₹{formatCurrency(c.price)}</div>
            <div className="quantity">{c.quantity}</div>
            <div className="remove">
              <Button
                className="removebtn"
                animated="vertical"
                onClick={() => {
                  removeCart(c);
                }}
              >
                <Button.Content hidden>Remove</Button.Content>
                <Button.Content visible>
                  <Icon name="remove" />
                </Button.Content>
              </Button>
            </div>
            <div className="total myprice">
              ₹{formatCurrency(c.totalamount)}
            </div>
          </div>
          <hr></hr>
        </div>
      );
      cartFooter();
    });
  };

  const cartFooter = () => {
    return (
      <div>
        <div className="subtotalcont">
          <div className="subtlbl">Subtotal</div>
          <div className="subtval">₹{formatCurrency(subTotal)}</div>
        </div>
        <div className="subtotalcont">
          <div className="subtlbl">Tax (0%)</div>
          <div className="subtval">₹0</div>
        </div>
        <div className="subtotalcont">
          <div className="subtlbl">Grand Total</div>
          <div className="subtval">₹{formatCurrency(subTotal)}</div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <Link to={"/"}>
        <div>
          <Image width="100%" height="400px" src="emptycart.png" />

          <h5 className="noproduct">Your cart is empty</h5>
        </div>
      </Link>
    );
  };

  return (
    <div>
      <div className="cartheader">
        <div className="viewheader">Shopping Cart</div>
        <div className="clsprice">Price</div>
        <div className="clsquan">Quantity</div>
        <div className="clsremove">Remove</div>
        <div className="clstot">Total</div>
      </div>
      <hr></hr>

      {mycarts.length > 0 ? loadCart() : emptyCart()}
      {mycarts.length > 0 ? cartFooter() : ""}
    </div>
  );
}
