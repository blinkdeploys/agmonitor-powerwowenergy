import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src="https://app.agmonitor.com/favicon.ico"
          alt={"Agmonitor logo"}
          style={{ marginTop: "10px" }}
        />
        <hr />
        <h1>Meter/Pump data</h1>
      </div>
    );
  }
}

export default Header;
