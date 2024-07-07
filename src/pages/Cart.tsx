import { Container } from "react-bootstrap";
import "../css/Cart.css";
// import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { productsData } from "../utils/functions";

interface CartItem {
  id: number;
  name: string;
  image: string;
  grams: string;
  quantity: number;
  price: number;
  favorite: boolean;
}

const Cart = () => {
  const favoriteProducts = productsData.filter((product) => product.favorite);
  // const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const storedCart = localStorage.getItem("cart");
  //   const parsedCart: CartItem[] = storedCart ? JSON.parse(storedCart) : [];
  //   setCartItems(parsedCart);
  // }, []);

  // const updateCart = (items: CartItem[]) => {
  //   setCartItems(items);
  //   localStorage.setItem("cart", JSON.stringify(items));
  // };

  // const handleAdd = (id: number) => {
  //   const updatedItems = cartItems.map((item) =>
  //     item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  //   );
  //   updateCart(updatedItems);
  // };

  // const handleSubtract = (id: number) => {
  //   const updatedItems = cartItems.map((item) =>
  //     item.id === id && item.quantity > 1
  //       ? { ...item, quantity: item.quantity - 1 }
  //       : item
  //   );
  //   updateCart(updatedItems);
  // };

  // const handleRemove = (id: number) => {
  //   const updatedItems = cartItems.filter((item) => item.id !== id);
  //   updateCart(updatedItems);
  // };

  // const subtotal = cartItems.reduce(
  //   (acc, item) => acc + item.price * item.quantity,
  //   0
  // );
  // const delivery = 1000;
  // const total = subtotal + delivery;

  return (
    <Container>
      <section className="cart mb-5">
        <h2>CART</h2>

        <div className="row">
          <div className="col-md-8">
            <div className="row header-row">
              <div className="header col-6 ">PRODUCT</div>
              <div className="header col-2 text-center">QUANTITY</div>
              <div className="header col-2  text-center">PRICE</div>
              <div className="header col-2  text-center">DELETE</div>
            </div>

            {/* {cartItems.map((item: CartItem) => (
              <div className="row header-row py-2" key={item.id}>
                <div className="header col-6 d-flex">
                  <div className="image-container m-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid"
                    />
                  </div>
                  <div className="product d-flex flex-column justify-content-center">
                    <h5>{item.name}</h5>
                    <p>{item.grams}</p>
                  </div>
                </div>
                <div className="header col-2 text-center d-flex justify-content-center align-items-center">
                  <RiSubtractFill
                    className="me-3"
                    onClick={() => handleSubtract(item.id)}
                    color="rgba(0, 0, 0, 1)"
                    style={{ cursor: "pointer" }}
                  />
                  <p className="quantity m-0 p-0">{item.quantity}</p>
                  <MdAdd
                    className="ms-3"
                    onClick={() => handleAdd(item.id)}
                    color="rgba(0, 0, 0, 1)"
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className="price col-2 d-flex justify-content-center align-items-center text-center">
                  ${item.price * item.quantity}
                </div>
                <div className="header col-2 d-flex justify-content-center align-items-center">
                  <IoClose
                    onClick={() => handleRemove(item.id)}
                    color="rgba(0, 0, 0, 1)"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            ))} */}

            {favoriteProducts.map((item: CartItem) => (
              <div className="row header-row py-2" key={item.id}>
                <div className="header col-6 d-flex">
                  <div className="image-container m-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid"
                    />
                  </div>
                  <div className="product d-flex flex-column justify-content-center">
                    <h5>{item.name}</h5>
                    <p>{item.grams}</p>
                  </div>
                </div>
                <div className="header col-2 text-center d-flex justify-content-center align-items-center">
                  <RiSubtractFill
                    className="add-icon me-3"
                    color="rgba(0, 0, 0, 1)"
                    size={22}
                    style={{ cursor: "pointer" }}
                  />
                  <p className="quantity m-0 p-0">{item.quantity}</p>
                  <MdAdd
                    className="minus-icon ms-3"
                    color="rgba(0, 0, 0, 1)"
                    size={22}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className="price col-2 d-flex justify-content-center align-items-center text-center">
                  ${item.price * item.quantity}
                </div>
                <div className="header col-2 d-flex justify-content-center align-items-center">
                  <IoClose
                    color="rgba(0, 0, 0, 1)"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-4 ps-md-5 ">
            <div className="mx-md-0 mx-3">
              <div className="row header-row total">TOTAL</div>
              <div className="row header-row py-2 amount">
                <div className="d-flex justify-content-between align-items-center">
                  <p>SUBTOTAL</p>
                  <p>$6300</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="m-0 p-0">DELIVERY</p>
                  <p className="m-0 p-0">$1000</p>
                </div>
              </div>
              <div className="row py-2">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="fw-bold">TOTAL PRICE</p>
                  <p>$7300</p>
                </div>
                <p>Do you have a discount?</p>
                <div className="discount w-100 d-flex">
                  <input
                    type="text"
                    placeholder="Enter discount code"
                    className="w-100"
                  />
                  <button className="ms-md-1">APPLY</button>
                </div>

                <button className="checkoutBtn mt-4">CHECKOUT</button>
                <p
                  className="mt-2 text-end text-decoration-underline"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/")}
                >
                  CONTINUE SHOPPING
                </p>
                <div className="d-flex justify-content-end"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Cart;
