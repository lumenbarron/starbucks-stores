import React from "react";
import axios from "axios";
// import { Link } from 'react-router-dom';

export default class Store extends React.Component {
  state = {
    store: "",
  };

  componentDidMount() {
    let id = this.props.match.params.store_id;
    axios
      .get("/store/" + id)
      .then((res) => {
        console.log(res);
        this.setState({ store: res.data });
        //console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deletePost = () => {
    let id = this.props.match.params.store_id;
    axios
      .delete(`/store/${id}`)
      .then((res) => {
        console.log(res);
        alert("se ha borrado con exito");
        // axios.get('http://localhost:5000/store/')
        // .then (res => {
        //     const stores = res.data;
        //     this.setState ({stores})
        // })
        // .catch(err => {
        //   console.log(err)
        // })
      })
      .catch((err) => {
        console.log(err);
      });
    window.location = "/";
  };

  render() {
    console.log(this.state.store.name);
    const store = (
      <div className="container padding-store">
        <div className="card card-starbuks height-store">
          <div className="card-image">
            <img
              className="image-starbucks"
              src={this.state.store.image}
              alt="starbuck"
            />
          </div>
          <div className="card-content">
            <span className="card-title">
              <b>{this.state.store.name}</b>
            </span>
            <h6>City : {this.state.store.city}</h6>
            <p>Address : {this.state.store.address}</p>
            <button
              className="btn waves-effect waves-light red accent-2 z-depth-0 delete-btn"
              onClick={() => this.deletePost(store["_id"])}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
    return <div>{store}</div>;
  }
}
