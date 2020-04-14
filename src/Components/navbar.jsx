import React, { Component } from "react";

class NavBAr extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            Total Count : {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBAr;
