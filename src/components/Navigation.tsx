import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { CiHeart, CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import { CustomNavLink } from "./CustomNavLink";
import { useCart } from "../utils/CartContext";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const { cartCount } = useCart();

  return (
    <>
      <Navbar collapseOnSelect expand="md" className="navigation">
        <Container>
          {/* <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setToggle(!toggle)}
            className=" toggle"
          >
            <span>
              <IoMenu className="toggle-icon me-3" />
            </span>
            <p className="m-0 p-0">Sweet Tooth</p>
          </Navbar.Toggle> */}
          <div className="toggle">
            {" "}
            <span>
              <IoMenu
                className="toggle-icon me-3"
                onClick={() => setToggle(!toggle)}
              />
            </span>
            <CustomNavLink to="/" label="Sweet Tooth" toggle={toggle} />
          </div>
          <Navbar.Brand href="/" className="logo">
            Sweet Tooth
          </Navbar.Brand>
          {/* <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="/" className="logo">
              Sweet Tooth
            </Navbar.Brand>
            <Nav className="mx-auto links">
              <Nav.Link href="#home" className="me-2 ">
                Home
              </Nav.Link>
              <CustomNavLink to="/" label="Product" />
              <CustomNavLink to="/cart" label="Cart" />
              <CustomNavLink to="/checkout" label="Checkout" />
            </Nav>
          </Navbar.Collapse> */}
          {/* <Nav className={`d-flex flex-row ${toggle ? "mx-auto" : ""}`}> */}
          <Nav className={`d-flex flex-row `}>
            <CustomNavLink
              to="#search"
              label={<CiSearch className="nav-icon" />}
              toggle={toggle}
            />
            <CustomNavLink
              to="/"
              label={<CiHeart className="nav-icon" />}
              toggle={toggle}
            />
            <div className="position-relative">
              <CustomNavLink
                to={`/cart`}
                label={<PiShoppingCartThin className="nav-icon" />}
                toggle={toggle}
              />
              <span className="cart-count position-absolute">{cartCount}</span>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
