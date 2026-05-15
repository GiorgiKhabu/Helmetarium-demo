import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { ProductDetails } from "./pages/ProductDetails";
import { Shop } from "./pages/Shop";
import { ModeSelector } from "./pages/ModeSelector";
import { ShopMotorcycle } from "./pages/ShopMotorcycle";
import { ProductDetailsMotorcycle } from "./pages/ProductDetailsMotorcycle";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-ink">
      <Navbar />
      <div className="flex-1 min-h-[calc(100vh-4rem)]">
        <Routes>
          <Route path="/" element={<ModeSelector />} />
          <Route path="/menu" element={<Shop />} />
          <Route path="/item/:id" element={<ProductDetails />} />
          <Route path="/shop" element={<ShopMotorcycle />} />
          <Route path="/product/:id" element={<ProductDetailsMotorcycle />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <ScrollToTop />
      </div>
      <Footer />
    </div>
  );
}

// coming soon
// home page -
// partners slider
// upcoming event

// product details -
// image gallery
// discounts
// in/out of stock
