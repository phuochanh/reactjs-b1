import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="card bg-light border-0 h-100">
        <div className="image">
          500 x 325
          <p className="text1">Powered by Html_CCM</p>
        </div>
        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
          <div className="cart-item">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
              <i className="bi bi-collection" />
            </div>
            <h4 className="fs-4 fw-bold">Card title</h4>
            <p className="mb-0">
              With Bootstrap 5, we've created a fresh new layout for this
              template!
            </p>
          </div>
        </div>
        <div className="cart-bottom">
          <button className="btn btn-primary btn-item">Find Out More!</button>
        </div>
      </div>
    );
  }
}
