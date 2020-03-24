import React, { Component } from "react";

class NavBAr extends Component {
  mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">
          <h2 style={this.mystyle}>Counter Application</h2>{" "}
          <span className="badge badge-pill badge-secondry">
            Total Count : {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBAr;
