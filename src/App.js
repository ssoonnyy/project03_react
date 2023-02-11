import "./App.css";
import "./pages/style/style.css";
import "./pages/style/header.scss";
import "./pages/style/main.scss";
import "./pages/style/footer.scss";
import "./pages/style/introduce.scss";
import "./pages/style/shop.scss";
import "./pages/style/cart.scss";
import "./pages/style/detail.scss";

import { Route, Routes } from "react-router-dom";
import Header from "./pages/MainComponents/Header";
import Footer from "./pages/MainComponents/Footer";
import Main from "./pages/MainComponents/Main";
import Shop from "./pages/MainComponents/Shop";
import Center from "./pages/MainComponents/Center";
import Introduce from "./pages/MainComponents/Introduce";
import { useState } from "react";
import productDatabase from "./pages/database/productDatabase";
import Details from "./pages/SubComponents/Details";
import Cart from "./pages/MainComponents/Cart";

function App() {
  const [pains] = useState(productDatabase.pain);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="project03_react" element={<Main />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="center" element={<Center />} />
        <Route path="introduce" element={<Introduce />} />
        <Route path="cart" element={<Cart />} />
        <Route
          path="/details/:category/:id"
          element={<Details pains={pains} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
