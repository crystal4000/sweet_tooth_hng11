import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../css/Home.css";
import HeaderImage from "../images/header_image.png";
import { formatNumber } from "../utils/functions";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import PaginationUI from "../components/PaginationUI";
import { IoCart, IoCartOutline } from "react-icons/io5";
import { useCart } from "../utils/CartContext";
import { ClipLoader } from "react-spinners";
import ProductModal from "../components/ProductModal";
import { useFetchProductsQuery } from "../utils/apiSlice";

type HomeProps = {
  searchQuery: string;
  favoritesFilter: boolean;
};
const Home = ({ searchQuery, favoritesFilter }: HomeProps) => {
  const [favorites, setFavorites] = useState<any[]>([]);
  const [showProductModal, setShowProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [pageDetails, setPageDetails] = useState<any>({
    currentPage: 1,
    totalItems: 0,
    size: 12,
    totalPages: 0,
  });
  const { addToCart, cartItems } = useCart();

  // Use the useFetchProductsQuery hook
  const { data, error, isLoading } = useFetchProductsQuery({
    page: pageDetails.currentPage,
    size: pageDetails.size,
  });

  useEffect(() => {
    if (data) {
      setPageDetails((prevPageDetails: any) => ({
        ...prevPageDetails,
        totalItems: data.total,
        totalPages: Math.ceil(data.total / pageDetails.size),
      }));
    }
  }, [data, pageDetails.size]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const handleFavoriteClick = (product: any) => {
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

  const handleCartClick = (product: any) => {
    const isInCart = cartItems.some((item) => item.id === product.id);
    if (isInCart) {
      toast.error("This item is already in your cart!");
    } else {
      addToCart(product);
      toast.success("Item added to cart!");
    }
  };

  const isProductFavorite = (product: any) => {
    return favorites.some((fav) => fav.id === product.id);
  };

  const isProductInCart = (product: any) => {
    return cartItems.some((item) => item.id === product.id);
  };

  const handlePageChange = (page: number) => {
    setPageDetails((prevPageDetails: any) => ({
      ...prevPageDetails,
      currentPage: page,
    }));
  };

  // Filter products based on the search query
  const filteredProducts =
    data?.items.filter((product: any) => {
      if (favoritesFilter && !isProductFavorite(product)) return false;
      if (
        searchQuery &&
        !product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
        return false;
      return true;
    }) || [];

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
          {isLoading ? (
            <div className="loader-container d-flex justify-content-center align-items-center">
              <ClipLoader
                color="rgba(247, 220, 111, 1)"
                size={80}
                className="mx-auto"
              />
            </div>
          ) : error ? (
            <div className="error-message d-flex justify-content-center align-items-center">
              <p>Error fetching products. Please try again later.</p>
            </div>
          ) : (
            <>
              <div className="mx-5 title d-flex justify-content-center align-items-center py-1">
                <h3 className="m-0 p-0">
                  HOT DEALS FOR THIS WEEK <br className="d-md-none " />
                  <span className="ms-md-3 ms-0">SAVE UP TO 50% OFF</span>
                </h3>
              </div>
              <div className="products-container mx-md-3 px-md-5 px-1 pt-3 pb-4 mb-3">
                <div className="products-list mt-5">
                  {filteredProducts.map((product: any) => (
                    <div className="card" key={product.id}>
                      <div className="favorite d-flex justify-content-end">
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
                      <div
                        className="image-container"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setShowProductModal(true);
                          setSelectedProduct(product);
                        }}
                      >
                        <img
                          src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                          alt={product.name}
                          className="img-fluid"
                        />
                      </div>
                      <div className="product-details mt-3">
                        <h5>{product.name}</h5>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <p className="m-0 p-0">{product.grams}</p>
                            <h6 className="mt-2">
                              ${formatNumber(product.current_price[0].USD[0])}
                            </h6>
                          </div>
                          <div className="icon">
                            {isProductInCart(product) ? (
                              <IoCart
                                fontSize={"25px"}
                                color="rgba(69, 43, 31, 1)"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleCartClick(product)}
                              />
                            ) : (
                              <IoCartOutline
                                fontSize={"25px"}
                                color="rgba(69, 43, 31, 1)"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleCartClick(product)}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {(data?.items.length > 0 || pageDetails.totalPages > 1) && (
                <div className="d-flex justify-content-end mx-4">
                  <PaginationUI
                    totalPages={pageDetails.totalPages}
                    currentPage={pageDetails.currentPage}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}
            </>
          )}
        </section>

        <ProductModal
          show={showProductModal}
          handleClose={() => setShowProductModal(false)}
          product={selectedProduct}
        />
      </Container>
    </>
  );
};

export default Home;
