import { Col, Container, Form, Row } from "react-bootstrap";
import "../css/Checkout.css";
// import { IoMdCheckmark } from "react-icons/io";

const Checkout = () => {
  return (
    <Container>
      <section className="checkout mb-5">
        <h2>CHECKOUT</h2>

        {/* <div className="timeline d-flex align-items-center">
          <div className="icon me-md-3 me-1">
            <IoMdCheckmark color="rgba(247, 158, 27, 1)" />
          </div>
          <span className="me-md-3 me-1">Shipping</span>
          <div className="line me-md-3 me-1"></div>
          <div className="icon active me-md-3 me-1">2</div>
          <span className="me-md-3 me-1">Payment</span>
          <div className="line me-md-3 me-1"></div>
          <div className="icon me-md-3 me-1">3</div>
          <span>Confirmation</span>
        </div> */}

        <Form className="payment row mt-3">
          {/* <h3 className="mb-3">PAYMENT DETAILS</h3>
          <hr /> */}

          <div className="col-md-6 col-12">
            <>
              <h5 className="mb-4">BILLING INFORMATION</h5>
              <Form.Group className="mb-4">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" className="form-control" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" className="form-control" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Billing Address</Form.Label>
                <Form.Control type="text" className="form-control" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" className="form-control" />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>ZIP</Form.Label>
                    <Form.Control type="text" className="form-control" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-4">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" className="form-control" />
                  </Form.Group>
                </Col>
              </Row>
            </>
          </div>
          {/* <div className="col-md-5 col-12 d-flex flex-column align-items-md-center justify-content-center mt-2">
           
          </div> */}

          <div className="col-md-6 col-12">
            <>
              {" "}
              <h5 className="mb-4">CREDIT CARD INFORMATION</h5>
              <Form.Group className="mb-4">
                <Form.Label>Name on Card</Form.Label>
                <Form.Control type="text" className="form-control" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Credit Card Number</Form.Label>
                <Form.Control type="text" className="form-control" />
              </Form.Group>
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-4">
                    <Form.Label>Security Code</Form.Label>
                    <Form.Control type="text" className="form-control" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-4">
                    <Form.Label>Expiry Date</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control"
                      placeholder="Month"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-4">
                    <Form.Control
                      type="text"
                      className="year form-control"
                      placeholder="Year"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <div className="d-flex flex-column mt-2">
                <h3>ACCEPTED CARDS</h3>
                <div className="d-flex align-items-center">
                  <div className="image-container visa me-2"></div>
                  <div className="image-container mastercard me-2"></div>
                  <div className="image-container paypal me-2"></div>
                  <div className="image-container american-express"></div>
                </div>
              </div>
            </>

            <button type="button" className="submitBtn mt-4">
              Submit Payment
            </button>
          </div>
        </Form>
      </section>
    </Container>
  );
};

export default Checkout;
