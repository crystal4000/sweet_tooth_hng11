import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { CiHeart, CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";

interface CustomNavLinkProps {
  to: string;
  label: React.ReactNode;
  toggle?: boolean;
  onClick?: () => void;
}

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  return (
    <>
      <Navbar collapseOnSelect expand="md" className="navigation">
        <Container>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setToggle(!toggle)}
            className=" toggle"
          >
            <span>
              <IoMenu className="toggle-icon me-3" />
            </span>
            <p className="m-0 p-0">Sweet Tooth</p>
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
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
          </Navbar.Collapse>
          <Nav className={`d-flex flex-row ${toggle ? "mx-auto" : ""}`}>
            <CustomNavLink
              to="#search"
              label={<CiSearch className="nav-icon" />}
              toggle={toggle}
            />
            <CustomNavLink
              to="#favorite"
              label={<CiHeart className="nav-icon" />}
              toggle={toggle}
            />
            <CustomNavLink
              to="#cart"
              label={<PiShoppingCartThin className="nav-icon" />}
              toggle={toggle}
            />
          </Nav>
        </Container>
      </Navbar>
    </>
  );

  function CustomNavLink({ to, label, toggle, onClick }: CustomNavLinkProps) {
    const isActive = location.pathname === to;

    return (
      <Nav.Link
        as={NavLink}
        to={to}
        className={`me-${toggle ? "4" : "2"} ${isActive ? "active" : ""}`}
        onClick={onClick}
      >
        {label}
      </Nav.Link>
    );
  }
};

export default Navigation;
