import React, { Component } from "react";

export default class Child extends Component {
  render() {
    let { id, productName, price, QTY } = this.props.product;
    return (
      <div className="bg-secondary text-white my-2 p-5">
        <div>product ID : {id}</div>
        <div>product name : {productName}</div>
        <div>product price : {price}</div>
        <div>Stock QTY : {QTY}</div>
        <div className="d-flex justify-content-between mt-3">
          <button
            className="btn-danger btn"
            onClick={() => {
              this.props.DeleteQTY(this.props.index);
            }}
          >
            -
          </button>
          <button
            className="btn-success btn"
            onClick={() => {
              this.props.AddQTY(this.props.index);
            }}
          >
            +
          </button>
        </div>
        <div>
          <button
            className="btn-danger btn w-100 mt-3"
            onClick={() => {
              this.props.DeleteProduct(this.props.index);
            }}
          >
            Delete this item
          </button>
        </div>
      </div>
    );
  }
}
