import "./App.css";
import "./pages/style/style.css";
import "./pages/style/main.scss";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Main from "./pages/Main";
import Paindetail from "./pages/Paindetail";
import Shop from "./pages/Shop";
import Center from "./pages/Center";
import Introduce from "./pages/Introduce";
import Details from "./pages/Details";
import { useState } from "react";

import hotitem from "./pages/hotitemDate";
import { pain } from "./pages/productDatabase";

function App() {
  const [hots] = useState(hotitem);
  const [pains] = useState(pain);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/project03_react" element={<Main />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="center" element={<Center />} />
        <Route path="introduce" element={<Introduce />} />
        <Route path="/detail/:id" element={<Details hots={hots} />} />
        <Route path="/paindetail/:id" element={<Paindetail pains={pains} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
