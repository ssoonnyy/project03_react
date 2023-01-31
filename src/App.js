import "./App.css";
import "./pages/style/style.css";
import "./pages/style/main.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Center from "./pages/Center";
import Introduce from "./pages/Introduce";
import { useState } from "react";
import productDatabase from "./pages/productDatabase";
import Hotdetail from "./pages/Hotdetail";
import Details from "./pages/Details";
import Cart from "./pages/Cart";

function App() {
  const [hots] = useState(productDatabase.hot);
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
        <Route path="/details/hot/:id" element={<Hotdetail hots={hots} />} />
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
