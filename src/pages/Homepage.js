import React from "react";
import { ProductConsumer } from "../context";
const Homepage = () => {
  return (
    <>
      <ProductConsumer>{value => <h1>{value}</h1>}</ProductConsumer>
    </>
  );
};

export default Homepage;
