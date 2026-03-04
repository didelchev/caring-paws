import React from "react";
import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import FeaturedSection from "../../components/FeaturedSection/FeaturedSection";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <FeaturedSection />
      <MainContent />
      <Footer />
    </div>
  );
}