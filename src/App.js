import { Route, Routes } from "react-router-dom";

// Bootstrap & Jquery
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

// CSS
import "./App.css";

// Pages
import Home from "./pages/Home";
import Product from "./pages/Product";

// Context Provider
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
