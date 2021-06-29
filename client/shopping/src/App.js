import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderComponent from "./containers/header";
import ProductComponent from "./containers/productListings";
import { Menu, Container } from "semantic-ui-react";
import ViewcartComponent from "./containers/viewcart/viewcart";
import AddressComponent from "./containers/address/address";
import AdminOrderComponent from "./containers/myadmin/adminorder";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu>
          <HeaderComponent></HeaderComponent>
        </Menu>
        <Container style={{ marginTop: "23%" }}>
          <Switch>
            <Route path="/" exact component={ProductComponent}></Route>
            <Route path="/viewcart" exact component={ViewcartComponent}></Route>
            <Route path="/address" exact component={AddressComponent}></Route>
            <Route
              path="/adminorder"
              exact
              component={AdminOrderComponent}
            ></Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
