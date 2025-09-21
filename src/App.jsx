import React from "react";
import Footer from "./components/footer";
import Home from "./pages/Home";
import PricingSection from "./pages/PricingSection";
import { Routes, Route } from "react-router-dom";
import BuyCredit from "./pages/BuyCredit";
import Result from "./pages/Result";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<BuyCredit />} />
          <Route path="/pricing" element={<PricingSection />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
