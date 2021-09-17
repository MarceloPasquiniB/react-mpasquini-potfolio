import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeAbout, homeExperience } from "../components/InfoSection/Data";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import TechSection from "../components/TechSection";
import { homeDevTools } from "../components/TechSection/Data";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeAbout} />
      <InfoSection {...homeExperience} />
      <TechSection {...homeDevTools} />
      <Projects />
      <Footer />
    </>
  );
}
