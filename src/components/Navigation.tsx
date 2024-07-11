import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { CiHeart, CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import { CustomNavLink } from "./CustomNavLink";
import toast from "react-hot-toast";

interface CartItem {
  id: number;
  name: string;
  image: string;
  grams: string;
  quantity: number;
  price: number;
  favorite: boolean;
}
const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const parsedCart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];
    setCartItems(parsedCart);
  }, [cartItems]);

  const checkCart = () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
    }
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
                to={`${cartItems.length > 0 ? "/cart" : "/"}`}
                label={<PiShoppingCartThin className="nav-icon" />}
                toggle={toggle}
                onClick={checkCart}
              />
              {/* <span className="cart-count position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger">
                0
              </span> */}
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
