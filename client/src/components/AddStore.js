import React , {Component} from 'react';
import axios from 'axios';
import './style/stores.css';

export default class AddStore extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name : '',
            city : '',
            address :'',
            image : ''
        }
    }
    handleChange = (e) => {
        this.setState ({[e.target.name] : e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault ();
        console.log(this.state)
        axios.post("/store/", this.state)
         .then(res => {
           console.log(res);

           this.setState({
            name : '',
            city : '',
            address :'',
            image : ''
           })
           alert('Se ha añadido tu tienda')
         })
         .catch(error => {
             console.log(error)
         });
         window.location = "/";
    }

    render () {
        const {name, city, address, image} = this.state
        return (
          <div className="">

            <div className="row container-header">
            <div className="col s12 m6 img-header-add">
              
              </div>
              <div className="col s12 m6">
              <h3 className="text-header">Do you know an amazing store? Add it!</h3>
                <form onSubmit={this.handleSubmit} className="white">

                  <input
                    placeholder="Store Name:"
                    value={name}
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                  />
                  <input
                    placeholder="Store City:"
                    value={city}
                    type="text"
                    name="city"
                    onChange={this.handleChange}
                  />
                  <input
                    placeholder="Store Address:"
                    value={address}
                    type="text"
                    name="address"
                    onChange={this.handleChange}
                  />
                  <input
                    placeholder="Store Image URL:"
                    value={image}
                    type="text"
                    name="image"
                    onChange={this.handleChange}
                  />

                  <button
                    type="submit"
                    className="btn waves-effect waves-light red accent-2 z-depth-0 delete-btn"
                  >
                    Add
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
    }
}