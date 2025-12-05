import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CreateStoreView from "./views/CreateStoreView";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreateProduct } from "./views/CreateProduct";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Define individual routes */}
        <Route path="/" element={<CreateStoreView />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/product/:id" element={<CreateProduct />} /> 
  

        {/* <Route path="/registro" element={<CreateStoreView />} />
        <Route path="/login" element={<CreateStoreView />} /> */}
      </Routes>
    </Router>
  </StrictMode>
);
