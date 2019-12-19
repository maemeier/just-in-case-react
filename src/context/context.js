import React, { Component } from "react";

const ProductContext = React.createContext();

// Provider
// Consume

class ProductProvider extends Component {
  render() {
    return (
      <ProductContext.Provider value="Hi, from context"></ProductContext.Provider>
    );
  }
}

export default ProductProvider;
