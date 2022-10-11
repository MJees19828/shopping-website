import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./button";
import styled from "styled-components";
import { UsersContext } from "../UserContext";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { user } = useContext(UsersContext);

  return (
    <NavWrapper className="navbar navbar-expand-lg  px-sm-5">
      <div className="container">
        <Link to="/">
          <h1 className="navbar-brand">ABMAZAK ONLINE SHOP</h1>
        </Link>
        <div className="navbar-nav ml-auto">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item ml-5">
              <Link to="/contact" className="nav-link">
                Contact us
              </Link>
            </li>
          </ul>

          {Object.keys(user).length > 0 ? (
            <Link to="./cart" className="ml-auto">
              <ButtonContainer>
                <span className="mr-2">
                  <FaShoppingCart size={30} />
                </span>
                My cart
              </ButtonContainer>
            </Link>
          ) : (
            <>
              <Link to="/login" className="nav-link">
                <ButtonContainer>LOG IN</ButtonContainer>
              </Link>
              <Link to="/register" className="nav-link">
                <ButtonContainer>SIGN UP</ButtonContainer>
              </Link>
              <div>

              <Link to="/cart" className="nav-link" > <FaShoppingCart/>Cart</Link>
              </div>
             
            </>
          )}
        </div>
      </div>
    </NavWrapper>
  );
};

export default Navbar;

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
