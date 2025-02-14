import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavBar = () =>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen)
    };
    return (
        <nav className="navbar">
          <div className="title">
            <p className="name">Satrana Ravelojaona</p>
            <p className="dev">Développeuse Front End React Javascript</p>
          </div>
          <div className={`anchorLinks ${isMenuOpen ? "anchorLinks--open menuAppear" : ""}`}>
            <ul className="anchorLinks__list">
              <li onClick={() => setIsMenuOpen(false)}>
                <a href="#presentation" className="anchorLink" >
                  Présentation
                </a>
              </li>
              <li onClick={() => setIsMenuOpen(false)}>
                <a href="#achievement" className="anchorLink">
                  Réalisations
                </a>
              </li>
              <li onClick={() => setIsMenuOpen(false)}>
                <a href="#contact" className="anchorLink" >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="responsiveIcon">
            <FontAwesomeIcon
              icon={faBars}
              className="iconNavBar"
              onClick={toggleMenu}
              aria-label="menu de navigation"
            />
          </div>
        </nav>
    );
};

export default NavBar;