import React, { Component } from "react";
import Child from "../Child/Child";

export default class Parent extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    let products = localStorage.getItem("products");
    if (products) this.setState({ products: JSON.parse(products) });
    else
      this.setState({
        products: [
          {
            id: 1,
            productName: "AAA",
            price: 111,
            QTY: 1,
          },
          {
            id: 2,
            productName: "BBB",
            price: 111,
            QTY: 1,
          },
          {
            id: 3,
            productName: "CCC",
            price: 111,
            QTY: 1,
          },
          {
            id: 4,
            productName: "DDD",
            price: 111,
            QTY: 1,
          },
          {
            id: 5,
            productName: "DDD",
            price: 111,
            QTY: 1,
          },
        ],
      });
  }

  componentDidUpdate() {
    localStorage.setItem("products", JSON.stringify(this.state.products));
  }

  AddQTY = (index) => {
    let products = [...this.state.products];
    products[index].QTY++;
    this.setState({ products });
  };

  DeleteQTY = (index) => {
    let products = [...this.state.products];
    if (products[index].QTY > 0) products[index].QTY--;
    this.setState({ products });
  };

  DeleteProduct = (index) => {
    let products = [...this.state.products];
    products.splice(index, 1);
    this.setState({ products });
  };

  AddProduct = () => {
    let product = {
      id: this.state.products.length + 1,
      productName: "new Product",
      price: 111,
      QTY: 1,
    };
    let products = [...this.state.products];
    products = [...products, product];
    this.setState({ products });
  };

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center my-5">
          <button className="btn-success btn" onClick={this.AddProduct}>
            add product
          </button>
        </div>
        <div className="d-flex justify-content-evenly flex-wrap">
          {this.state.products.map((product, index) => (
            <Child
              key={index}
              index={index}
              product={product}
              AddQTY={this.AddQTY}
              DeleteQTY={this.DeleteQTY}
              DeleteProduct={this.DeleteProduct}
            />
          ))}
        </div>
      </div>
    );
  }
}
