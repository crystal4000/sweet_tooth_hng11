import { useState } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { CiHeart, CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import { CustomNavLink } from "./CustomNavLink";
import { useCart } from "../utils/CartContext";
import { IoMdHeart } from "react-icons/io";
import { NavigationProps } from "../types/type";

const Navigation = ({
  setSearchQuery,
  setFavoritesFilter,
  favoritesFilter,
}: NavigationProps) => {
  const [toggle, setToggle] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const { cartCount } = useCart();

  const handleSearchClick = () => {
    setShowSearchInput(!showSearchInput);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    setSearchQuery(e.target.value);
  };

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
            {showSearchInput && (
              <Form.Control
                type="text"
                placeholder="Search"
                className="search-input me-2"
                value={searchInput}
                onChange={handleSearchInputChange}
              />
            )}
            <CustomNavLink
              to="#search"
              label={
                <CiSearch className="nav-icon" onClick={handleSearchClick} />
              }
              toggle={toggle}
            />
            <CustomNavLink
              to="#favorites"
              label={
                favoritesFilter ? (
                  <IoMdHeart
                    className="nav-icon"
                    color="rgba(247, 220, 111, 1)"
                    onClick={() => setFavoritesFilter(!favoritesFilter)}
                  />
                ) : (
                  <CiHeart
                    className="nav-icon"
                    onClick={() => setFavoritesFilter(!favoritesFilter)}
                  />
                )
              }
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
