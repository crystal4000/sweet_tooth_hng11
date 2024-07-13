import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [favoritesFilter, setFavoritesFilter] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              setSearchQuery={setSearchQuery}
              setFavoritesFilter={setFavoritesFilter}
              favoritesFilter={favoritesFilter}
            />
          }
        >
          <Route
            index
            element={
              <Home
                searchQuery={searchQuery}
                favoritesFilter={favoritesFilter}
              />
            }
          />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route
            path="*"
            element={
              <Home
                searchQuery={searchQuery}
                favoritesFilter={favoritesFilter}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
