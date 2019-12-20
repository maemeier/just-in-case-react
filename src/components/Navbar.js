import React from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <ProductConsumer>
      {value => {
        const { cartItems, handleSidebar, handleCartOpen } = value;
        return (
          <NavWrapper>
            <div className="nav-center"></div>
            <FaBars className="nav-icon" onClick={handleSidebar} />
            <img src={logo} alt="justincase" />
            <div className="nav-cart">
              <FaCartPlus className="nav-icon" onClick={handleCartOpen} />
            </div>
            <div className="cart-items">{cartItems}</div>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
};

const NavWrapper = styled.nav``;

export default Navbar;
