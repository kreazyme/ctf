import { Route, Routes } from "react-router-dom";
import Checkout from "./component/Checkout";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Product from "./component/Product";

function App() {
  return (
    <>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
