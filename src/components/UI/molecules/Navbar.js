import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    const navList = this.props.navItems.map((item, index) => (
      <li onClick={() => this.props.action(item.name)} key={index}>
        {item.name}
      </li>
    ));

    return <ul>{navList}</ul>;
  }
}
