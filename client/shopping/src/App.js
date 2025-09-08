import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderComponent from "./containers/header";
import ProductComponent from "./containers/productListings";
import { Menu, Container } from "semantic-ui-react";
import ViewcartComponent from "./containers/viewcart/viewcart";
import FooterComponent from "./components/footer/footer";
import "react-toastify/dist/ReactToastify.css";
import Login from "./containers/login/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu>
          <HeaderComponent></HeaderComponent>
        </Menu>
        <Container style={{ margin: "6.5em 0em" }}>
          <Switch>
            <Route path="/" exact component={ProductComponent}></Route>
            <Route path="/viewcart" exact component={ViewcartComponent}></Route>
            <Route path="/login" exact component={Login}></Route>
          </Switch>
        </Container>
        <FooterComponent></FooterComponent>
      </Router>
    </div>
  );
}

export default App;
