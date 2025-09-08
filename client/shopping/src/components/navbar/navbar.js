import React from "react";
import "./navbar.css";
import "./secondnavbar.css";
import { Icon } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

export default function Navbar() {
  const mycart = useSelector((state) => state.mycartItems.myCarts);
  const history = useHistory();
  // const navigate = useNavigate();
  return (
    <header>
      <Link className="logo" to={"/"}>
        <p className="logo-text">
          <h2>Tasties</h2>
          <span>Meat Hub</span>
        </p>
      </Link>
      {/* <input type="checkbox" id="toggler" className="toggler" />
      <label htmlFor="toggler" className="burger">
        <a href="#" className="deskcart">
          <Icon name="opencart" />
          <span className="cartcount">5</span>
        </a>
        <span>
          <Icon name="bars" />
        </span>
      </label> */}
      <div class="InputContainer">
        <input
          placeholder="Search"
          id="input"
          className="input_field"
          name="text"
          type="text"
        />

        <label class="labelforsearch" for="input">
          <svg class="searchIcon" viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
          </svg>
        </label>
      </div>

      <nav>
        <div className="button-container">
          <Link className="button" to={"/login"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              stroke-width="0"
              fill="currentColor"
              stroke="currentColor"
              className="icon"
            >
              <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"></path>
            </svg>
          </Link>

          <button className="button" onClick={() => history.push("/viewcart")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              stroke-linejoin="round"
              stroke-linecap="round"
              viewBox="0 0 24 24"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
              className="icon"
            >
              <circle r="1" cy="21" cx="9"></circle>
              <circle r="1" cy="21" cx="20"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span className="cartcount">{mycart.length}</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
