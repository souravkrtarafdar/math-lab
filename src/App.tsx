import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import CoordinateExplorer from "@/pages/mathematics/CoordinateExplorer";
import TopicPlaceholder from "@/pages/mathematics/TopicPlaceholder";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mathematics/geometry" element={<CoordinateExplorer />} />
          <Route path="/mathematics/:slug" element={<TopicPlaceholder />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
