import { Col, Container, Form, Row } from "react-bootstrap";
import "../css/Checkout.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getNext20Years, months } from "../utils/functions";
import { countries as countriesList } from "countries-list";
import ConfirmModal from "../components/ConfirmModal";

const Checkout = () => {
  const countries = Object.values(countriesList);
  const years = getNext20Years();
  const [validated, setValidated] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    billingAddress: "",
    city: "",
    zip: "",
    country: "",
    nameOnCard: "",
    cardNumber: "",
    securityCode: "",
    expiryMonth: "",
    expiryYear: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "cardNumber") {
      const cleanedValue = value.replace(/\D/g, "");
      const formattedValue = cleanedValue.replace(/(\d{4})/g, "$1 ").trim();

      if (formattedValue.length <= 19) {
        setFormValues({ ...formValues, [name]: formattedValue });
      }
    } else if (name === "securityCode") {
      const numericValue = value.replace(/\D/g, "").slice(0, 3);
      setFormValues({ ...formValues, [name]: numericValue });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    const { cardNumber, securityCode, country, expiryMonth, expiryYear } =
      formValues;

    if (form.checkValidity() === false) {
      toast.error("Please fill all the required fields.");
      return;
    }

    if (!country || !expiryMonth || !expiryYear) {
      toast.error("Please fill all the required fields.");
      return;
    }

    if (cardNumber.length < 19) {
      toast.error("Please enter a valid card number.");
      return;
    }

    if (securityCode.length < 3) {
      toast.error("Please enter a valid security code.");
      return;
    }

    setShowConfirmModal(true);
    localStorage.removeItem("cart"); // Remove cart from local storage
    setValidated(true);
  };

  return (
    <>
      <Toaster position="top-right" />
      <Container>
        <section className="checkout mb-5">
          <h2>CHECKOUT</h2>

          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="payment row mt-3"
          >
            <div className="col-md-6 col-12">
              <div className="px-md-3">
                <h5 className="mb-4">BILLING INFORMATION</h5>

                <Form.Group className="mb-4">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={formValues.firstName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    name="lastName"
                    value={formValues.lastName}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Billing Address</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    name="billingAddress"
                    value={formValues.billingAddress}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    name="city"
                    value={formValues.city}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label>ZIP</Form.Label>
                      <Form.Control
                        type="text"
                        className="form-control"
                        name="zip"
                        value={formValues.zip}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Label>Country</Form.Label>
                      <Form.Select
                        aria-label="Country"
                        name="country"
                        value={formValues.country}
                        onChange={(e) => {
                          setFormValues({
                            ...formValues,
                            [e.target.name]: e.target.value,
                          });
                        }}
                      >
                        <option value="" className="muted-text"></option>
                        {countries.map((country, index) => (
                          <option key={index} value={country.name}>
                            {country.name}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
              </div>
            </div>

            <div className="col-md-6 col-12">
              <div className="px-md-3">
                {" "}
                <h5 className="mb-4">CREDIT CARD INFORMATION</h5>
                <Form.Group className="mb-4">
                  <Form.Label>Name on Card</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    name="nameOnCard"
                    value={formValues.nameOnCard}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Credit Card Number</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    name="cardNumber"
                    value={formValues.cardNumber}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-4">
                      <Form.Label>Security Code</Form.Label>
                      <Form.Control
                        type="text"
                        className="form-control"
                        name="securityCode"
                        value={formValues.securityCode}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-4">
                      <Form.Label>Expiry Date</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        name="expiryMonth"
                        value={formValues.expiryMonth}
                        isInvalid
                        onChange={(e) => {
                          setFormValues({
                            ...formValues,
                            [e.target.name]: e.target.value,
                          });
                        }}
                      >
                        <option value="" className="muted-text">
                          Month
                        </option>
                        {months.map((month) => (
                          <option key={month.value} value={month.value}>
                            {month.label}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-4">
                      <Form.Select
                        aria-label="Year"
                        name="expiryYear"
                        value={formValues.expiryYear}
                        className="year"
                        onChange={(e) => {
                          setFormValues({
                            ...formValues,
                            [e.target.name]: e.target.value,
                          });
                        }}
                      >
                        <option value="" className="muted-text">
                          Year
                        </option>
                        {years.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </Form.Select>
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
              </div>

              <button type="submit" className="submitBtn mt-4">
                Submit Payment
              </button>
            </div>
          </Form>
        </section>
        <ConfirmModal
          show={showConfirmModal}
          handleClose={() => setShowConfirmModal(false)}
        />
      </Container>
    </>
  );
};

export default Checkout;
