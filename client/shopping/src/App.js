import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderComponent from "./containers/header";
import ProductComponent from "./containers/productListings";
import { Menu, Container } from "semantic-ui-react";
import ViewcartComponent from "./containers/viewcart/viewcart";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu>
          <HeaderComponent></HeaderComponent>
        </Menu>
        <Container style={{ marginTop: "5em" }}>
          <Switch>
            <Route path="/" exact component={ProductComponent}></Route>
            <Route path="/viewcart" exact component={ViewcartComponent}></Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;