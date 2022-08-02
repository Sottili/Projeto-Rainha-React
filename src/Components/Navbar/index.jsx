import React, { useRef } from 'react';
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import './index.css'

const Navbar = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive-nav');
    }

    return ( 
        <header>
            <nav ref={navRef}>
                <a href="">Pagina Inicial</a>
                <a href="">Quem Somos?</a>
                <a href="">Logo</a>
                <a href="">Artigos</a>
                <a href="">Agenda</a>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
            </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
     );
}
 
export default Navbar;