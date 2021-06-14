import React from "react";
import "./navbar.css";
import { Icon } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const mycart = useSelector((state) => state.mycartItems.myCarts);
  return (
    <header>
      <h2 className="logo">Fish&Meat</h2>
      <input type="checkbox" id="toggler" className="toggler" />
      <label htmlFor="toggler" className="burger">
        <a href="#" className="deskcart">
          <Icon name="opencart" />
          <span className="cartcount">5</span>
        </a>
        <span>
          <Icon name="bars" />
        </span>
      </label>
      <nav>
        <ul>
          <li>
            <a href="#">
              <img src="/static/media/google_color.svg"></img>
            </a>
          </li>
          <li>
            <Link to={"/"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/"}>About Us</Link>
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/viewcart"}>
              <Icon name="opencart" />
              <span className="cartcount">{mycart.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
