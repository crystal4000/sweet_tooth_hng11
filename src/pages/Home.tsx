import { Container } from "react-bootstrap";
import "../css/Home.css";
import HeaderImage from "../images/header_image.png";
import { formatNumber, productsData } from "../utils/functions";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { fetchProducts } from "../utils/api";

type Product = {
  id: number;
  name: string;
  grams: string;
  price: number;
  image: string;
  quantity: number;
  favorite?: boolean;
};
const Home = () => {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts(1, 10);
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    const storedCart = localStorage.getItem("cart");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    } else {
      // If no favorites in localStorage, check productsData for initial favorites
      const initialFavorites = productsData.filter(
        (product) => product.favorite
      );
      setFavorites(initialFavorites);
    }
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  const handleFavoriteClick = (product: Product) => {
    const isFavorite = favorites.some((fav) => fav.id === product.id);
    let newFavorites;
    if (isFavorite) {
      newFavorites = favorites.filter((fav) => fav.id !== product.id);
    } else {
      newFavorites = [...favorites, product];
    }
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  };

  const isProductFavorite = (product: Product) => {
    return favorites.some((fav) => fav.id === product.id);
  };

  const handleCartClick = (product: Product) => {
    const isInCart = cart.some((item) => item.id === product.id);
    if (isInCart) {
      toast.error("This product is already in your cart.");
    } else {
      const newProduct = { ...product, quantity: 1 }; // Set quantity to 1
      const newCart = [...cart, newProduct];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
      toast.success("Product added to cart.");
    }
  };
  return (
    <>
      <Toaster position="top-right" />
      <header className="py-md-4 px-5">
        <div className="header-content">
          <div className="row">
            <div className="col-md-6 col-12  d-flex flex-column justify-content-md-center align-items-start">
              <h2>Treat Yourself To Something Special</h2>
              <p>Handcrafted with love, Devoured with joy</p>
              <button type="button" className="btn">
                Shop Now
              </button>
            </div>

            <div className="header-image col-md-6 col-12 d-flex justify-content-center align-items-center">
              <div className="image-container">
                <img src={HeaderImage} alt="" className="img-fluid" />
                <div className="circle"></div>
              </div>
            </div>
          </div>

          <div className="line"></div>
        </div>
      </header>

      <Container>
        <section className="products mt-5 ">
          <div className="mx-5 title d-flex justify-content-center align-items-center py-1">
            <h3 className="m-0 p-0">
              HOT DEALS FOR THIS WEEK <br className="d-md-none " />
              <span className="ms-md-3 ms-0">SAVE UP TO 50% OFF</span>
            </h3>
          </div>
          <div className="products-container mx-md-3 px-md-5 px-1 pt-3 pb-4 mb-3">
            <div className="products-list mt-5">
              {productsData.map((product) => (
                <div className="card" key={product.id}>
                  <div className="favorite d-flex justify-content-end">
                    {/* {product.favorite ? (
                      <IoMdHeart
                        fontSize={"25px"}
                        color="rgba(247, 220, 111, 1)"
                        style={{ cursor: "pointer" }}
                      />
                    ) : (
                      <IoMdHeartEmpty
                        fontSize={"25px"}
                        color="rgba(247, 220, 111, 1)"
                        style={{ cursor: "pointer" }}
                      />
                    )} */}
                    {isProductFavorite(product) ? (
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
                  <div className="image-container">
                    <img src={product.image} alt="" className="img-fluid" />
                  </div>
                  <div className="product-details mt-3">
                    <h5>{product.name}</h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <p className="m-0 p-0">{product.grams}</p>
                        <h6 className="mt-2">${formatNumber(product.price)}</h6>
                      </div>
                      <div className="icon">
                        <BsCart2
                          fontSize={"25px"}
                          color="rgba(69, 43, 31, 1)"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleCartClick(product)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Home;
