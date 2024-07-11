import React from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="mt-2 py-3">
        <Container>
          <div className="row pb-4">
            <div className="footer-logo col-md-3 col-12 d-flex align-items-center mt-md-0 mt-5">
              <p>Sweet Tooth</p>
            </div>
            <div className="col-md-3 col-6 d-md-flex justify-content-center ">
              <ul className="m-0 p-0">
                <p className="m-0">Category</p>
                <li>
                  <NavLink to="#">Home </NavLink>
                </li>
                <li>
                  <NavLink to="/product">Product</NavLink>
                </li>
                <li>
                  <NavLink to="/cart">Cart</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-6 d-flex justify-content-center ">
              <ul className="m-0 p-0">
                <p className="m-0">Contact</p>
                <li>+234 7013417684</li>
                <li>winnie@gmail.com</li>
                <li className="">
                  <FaInstagram /> <FaFacebookF className="ms-3" />
                  <FaTwitter className="ms-3" />
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-12 d-flex justify-content-center align-items-center">
              <ul className="newsletter m-0 p-0">
                <label htmlFor="email">NEWSLETTER-SIGN UP FOR 10% OFF</label>
                <InputGroup className="mt-2">
                  <Form.Control placeholder="Email" aria-describedby="email" />
                  <InputGroup.Text id="email">
                    <GoMail />
                  </InputGroup.Text>
                </InputGroup>
                {/* <label htmlFor="email">NEWSLETTER-SIGN UP FOR 10% OFF</label>
                <input type="email" name="email" className="mt-2" /> */}
              </ul>
            </div>
          </div>
        </Container>
        <hr />
        <div className=" copy-right  col-12 d-flex justify-content-center align-items-center">
          <p className="m-0 p-0">© Sweet Tooth 2024</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
