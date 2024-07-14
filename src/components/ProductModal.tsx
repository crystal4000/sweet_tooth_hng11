import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";
import { useCart } from "../utils/CartContext";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { Photos, Product } from "../types/types";

const ProductModal = ({
  show,
  handleClose,
  product,
}: {
  show: boolean;
  handleClose: () => void;
  product: Product | null;
}) => {
  const {
    addToCart,
    cartItems,
    removeFromCart,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  } = useCart();
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    if (product && product.photos && product.photos.length > 0) {
      setCurrentImage(product.photos[0].url);
    }
  }, [product]);

  if (!product || !product.photos || product.photos.length === 0) {
    return null; // or return a placeholder or loading state
  }

  const handleFavoriteClick = (product: Product) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const handleCartClick = (product: Product) => {
    const isInCart = cartItems.some((item) => item.id === product.id);
    if (isInCart) {
      removeFromCart(product.id);
      toast.success("Item removed from cart!");
    } else {
      addToCart(product);
      toast.success("Item added to cart!");
    }
  };

  const isInCart = cartItems.some((item) => item.id === product.id);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        backdrop="static"
        keyboard={false}
        // size="lg"
      >
        <Modal.Header className="d-flex justify-content-end align-items-center">
          <IoClose
            onClick={() => handleClose()}
            fontSize={"1.2rem"}
            color="rgba(69, 45, 31, 1)"
            style={{ cursor: "pointer" }}
          />
        </Modal.Header>
        <Modal.Body>
          <div className="images d-flex flex-column justify-content-center align-items-center">
            <div className="main_image_container p-2 d-flex justify-content-center">
              <img
                src={`https://api.timbu.cloud/images/${currentImage}`}
                alt=""
                className="img-fluid mx-auto"
                width={200}
                height={200}
              />
            </div>

            <div className="mt-3 other_images_container d-flex justify-content-center  align-items-center">
              {product.photos.map((photo: Photos, index: number) => (
                <div
                  className={`img-container p-2 d-flex justify-content-center align-items-center ${
                    currentImage === photo.url ? "selected-image" : ""
                  }`}
                  key={index}
                  onClick={() => setCurrentImage(photo.url)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={`https://api.timbu.cloud/images/${photo.url}`}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="product-details mt-4 mx-md-3">
            <div className="d-flex justify-content-between align-items-center">
              <h5>{product.name}</h5>
              {isFavorite(product.id) ? (
                <IoMdHeart
                  fontSize={"25px"}
                  color="rgba(247, 220, 111, 1)"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleFavoriteClick(product)}
                />
              ) : (
                <IoMdHeartEmpty
                  fontSize={"25px"}
                  color="rgba(247, 220, 111, 1)"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleFavoriteClick(product)}
                />
              )}
            </div>
            <p>{product.description}</p>

            <div className="mt-2 d-flex justify-content-between align-items-center">
              <p className="price mb-0">${product.current_price[0].USD[0]}</p>

              <button
                type="button"
                className="addBtn px-3 py-2"
                onClick={() => handleCartClick(product)}
              >
                {isInCart ? "Remove from cart" : "Add to cart"}
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductModal;
