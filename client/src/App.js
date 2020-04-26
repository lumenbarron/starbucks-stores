import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StoreList from "./components/StoreList";
import AddStore from "./components/AddStore";
import Store from "./components/Store";
import Navbar from "./components/Navbar";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <section>
          <Switch>
            <Route exact path="/" component={StoreList} />
            <Route path="/add" component={AddStore} />
            <Route path="/:store_id" component={Store} />
          </Switch>
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
