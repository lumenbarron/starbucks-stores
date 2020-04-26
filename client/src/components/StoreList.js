import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./style/stores.css";

export default class StoreList extends Component {
  state = {
    stores: [],
    show: false,
  };
  componentDidMount() {
    axios
      .get("/store/")
      .then((res) => {
        console.log(res.data);
        const stores = res.data;
        this.setState({ stores, show: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const allStores = this.state.stores.map((store, i) => {
      return (
        <div key={i + 2} className="col s12 m3">
          <div key={i + 3} className="card card-starbuks">
            <div key={i + 4} className="card-image">
              <img
                className="image-starbucks"
                key={i + 5}
                src={store.image}
                alt="starbuck"
              />
            </div>
            <div className="card-content card-text">
              <span className="card-title card-title-text" key={store.name}>
                <b>{store.name}</b>
              </span>
              <Link
                className="btn waves-effect waves-light red accent-2 z-depth-0"
                to={"/" + store._id}
              >
                Ver más
              </Link>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        {/* <Header /> */}
        <div className="cont-all-stores">
          <div className="row">
            {this.state.show ? (
              allStores
            ) : (
              <div className="cont-load-page">
                <span className="center loading-page" />
                <h1 className="">Loading...</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
