import React, { Component } from "react";
import { gql } from "@apollo/client";
import { client } from "../../GraphQL/Queries";
import Navbar from "./../UI/molecules/Navbar";

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      navItems: [],
      activeNav: "",
      products: [],
    };
  }

  componentDidMount() {
    const getNavItems = gql`
      query {
        categories {
          name
        }
      }
    `;
    client.query({ query: getNavItems }).then((response) => {
      this.setState({
        navItems: response.data?.categories,
      });
      this.loadProducts(response.data?.categories[0]?.name);
    });
  }

  loadProducts = (category) => {
    this.setState({ activeNav: category });
    let getProducts = gql`
    query {
      category(input: {title: "${category}"}){
          products{
            name
          }
      }
    }
  `;

    client.query({ query: getProducts }).then((response) => {
      this.setState({
        products: response.data?.category?.products,
      });
      console.log(response.data?.category?.products);
    });
  };

  render() {
    return (
      <div>
        <Navbar navItems={this.state.navItems} action={this.loadProducts} />
      </div>
    );
  }
}
