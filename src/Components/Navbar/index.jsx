import React, { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import logo from "../../images/logo.png";
import "./index.css";
import { useEffect } from "react";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  useEffect(() => {
    const navigation = document.getElementById("navigation");
    const logo = document.getElementById("logo-navbar");
    window.onscroll = function () {
      scrollFunction();
    };
    function scrollFunction() {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        navigation.style.padding = "25px 10px";
        logo.style.width = "70px";
      } else {
        navigation.style.padding = "60px 10px";
        logo.style.width = "90px";
      }
    }
  });
  return (
    <>
      <header
        id="navigation"
        style={{
          fontFamily: "Poppins",
        }}
      >
        <img className="logo-response" src={logo} />
        <nav ref={navRef}>
          <a href="">Pagina Inicial</a>
          <a href="">Quem Somos?</a>
          <a href="">
            <img id="logo-navbar" src={logo} alt="logo rainha" />
          </a>
          <a href="">Artigos</a>
          <a href="">Agenda</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
      <div style={{ paddingBottom: "1000px" }}></div>
    </>
  );
};

export default Navbar;
