import { Container } from "react-bootstrap";
import "../css/Cart.css";
// import { useEffect, useState } from "react";
// import { RiDeleteBin6Line } from "react-icons/ri";
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
          <div className="col-md-8  px-md-0 px-5">
            <div className="row header-row">
              <div className="header col-md-6 col-12 text-md-start text-center   ">
                PRODUCTS
              </div>
              <div className="header col-2 text-center d-md-block d-none">
                QUANTITY
              </div>
              <div className="header col-2  text-center d-md-block d-none">
                PRICE
              </div>
              <div className="header col-2  text-center d-md-block d-none">
                DELETE
              </div>
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
                <div className="header col-md-6 col-12 d-flex flex-md-row flex-column justify-content-md-start justify-content-center align-items-md-start align-items-center">
                  <div className="image-container m-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid"
                    />
                  </div>
                  <div
                    className="product d-flex flex-column justify-content-center mt-md-4
                   mt-0"
                  >
                    <h5>{item.name}</h5>
                    <p className="text-md-start text-center">{item.grams}</p>
                  </div>
                </div>
                <div className="header col-md-2 col-4 text-center d-flex justify-content-center align-items-center">
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
                <div className="price col-md-2 col-4 d-flex justify-content-center align-items-center text-center">
                  ${item.price * item.quantity}
                </div>
                <div className="header col-md-2 col-4 d-flex justify-content-center align-items-center">
                  {/* <RiDeleteBin6Line
                    color="rgba(0, 0, 0, 1)"
                    style={{ cursor: "pointer" }}
                    size={22}
                  /> */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ cursor: "pointer" }}
                  >
                    <path
                      d="M19.4498 4.06006H15.2698V3.56006C15.2698 3.16223 15.1118 2.7807 14.8305 2.4994C14.5492 2.21809 14.1676 2.06006 13.7698 2.06006H10.2298C9.83198 2.06006 9.45045 2.21809 9.16914 2.4994C8.88784 2.7807 8.7298 3.16223 8.7298 3.56006V4.06006H4.5498C4.4172 4.06006 4.29002 4.11274 4.19625 4.20651C4.10248 4.30027 4.0498 4.42745 4.0498 4.56006C4.0498 4.69267 4.10248 4.81984 4.19625 4.91361C4.29002 5.00738 4.4172 5.06006 4.5498 5.06006H5.2698L5.6898 19.5101C5.70627 20.1615 5.97713 20.7806 6.4444 21.2347C6.91166 21.6889 7.53818 21.9421 8.1898 21.9401H15.8098C16.4614 21.9421 17.0879 21.6889 17.5552 21.2347C18.0225 20.7806 18.2933 20.1615 18.3098 19.5101L18.7298 5.06006H19.4498C19.5824 5.06006 19.7096 5.00738 19.8034 4.91361C19.8971 4.81984 19.9498 4.69267 19.9498 4.56006C19.9498 4.42745 19.8971 4.30027 19.8034 4.20651C19.7096 4.11274 19.5824 4.06006 19.4498 4.06006ZM9.7298 3.56006C9.7298 3.42745 9.78248 3.30027 9.87625 3.20651C9.97002 3.11274 10.0972 3.06006 10.2298 3.06006H13.7698C13.9024 3.06006 14.0296 3.11274 14.1234 3.20651C14.2171 3.30027 14.2698 3.42745 14.2698 3.56006V4.06006H9.7298V3.56006ZM17.3098 19.4801C17.2994 19.8709 17.1368 20.2422 16.8566 20.515C16.5764 20.7877 16.2008 20.9402 15.8098 20.9401H8.1898C7.79881 20.9402 7.42322 20.7877 7.14304 20.515C6.86286 20.2422 6.70023 19.8709 6.6898 19.4801L6.2598 5.06006H17.7398L17.3098 19.4801Z"
                      fill="black"
                    />
                    <path
                      d="M8.375 8C8.375 7.86739 8.42768 7.74021 8.52145 7.64645C8.61521 7.55268 8.74239 7.5 8.875 7.5C9.00761 7.5 9.13479 7.55268 9.22855 7.64645C9.32232 7.74021 9.375 7.86739 9.375 8L9.625 18C9.625 18.1326 9.57232 18.2598 9.47855 18.3536C9.38479 18.4473 9.25761 18.5 9.125 18.5C8.99239 18.5 8.86521 18.4473 8.77145 18.3536C8.67768 18.2598 8.625 18.1326 8.625 18L8.375 8ZM15.625 8.007C15.625 7.87439 15.5723 7.74721 15.4786 7.65345C15.3848 7.55968 15.2576 7.507 15.125 7.507C14.9924 7.507 14.8652 7.55968 14.7714 7.65345C14.6777 7.74721 14.625 7.87439 14.625 8.007L14.375 18.007C14.375 18.1396 14.4277 18.2668 14.5214 18.3606C14.6152 18.4543 14.7424 18.507 14.875 18.507C15.0076 18.507 15.1348 18.4543 15.2286 18.3606C15.3223 18.2668 15.375 18.1396 15.375 18.007L15.625 8.007Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-4 ps-md-5 mt-md-0 mt-5">
            <div className="mx-md-0 mx-3">
              <div className="row header-row total">Summary</div>
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
                <div className="total-price-container d-flex justify-content-between align-items-center">
                  <p className="total-price">TOTAL PRICE</p>
                  <p>$7300</p>
                </div>
                <p className="mt-md-0 mt-3">Do you have a discount?</p>
                <div className="discount w-100 d-flex">
                  <input
                    type="text"
                    placeholder="Discount code"
                    className="w-100"
                  />
                  <button className="ms-1">APPLY</button>
                </div>

                <button
                  className="checkoutBtn mt-4"
                  onClick={() => navigate("/checkout")}
                >
                  CHECKOUT
                </button>
                <p
                  className="continue mt-2 text-end text-decoration-underline"
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
