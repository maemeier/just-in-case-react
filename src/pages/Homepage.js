import React from "react";
import { ProductConsumer } from "../context";
import Hero from "../components/hero";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Hero title="JUST-IN-CASE" text="Your Iphone need a case" max="true">
        <Link to="/products">Our Products</Link>
      </Hero>
    </>
  );
}
