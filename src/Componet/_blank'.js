import React from 'react';

const HorizontalNav = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="scrollmenu">
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <div className="dropdown">
              <a href="#about" className="dropbtn">About</a>
              <div className="dropdown-content">
                <a href="#">Submenu Item 1</a>
                <a href="#">Submenu Item 2</a>
                <a href="#">Submenu Item 3</a>
              </div>
            </div>
            <div className="dropdown">
              <a href="#support" className="dropbtn">Support</a>
              <div className="dropdown-content">
                <a href="#">Submenu Item 1</a>
                <a href="#">Submenu Item 2</a>
                <a href="#">Submenu Item 3</a>
              </div>
            </div>
            <a href="#blog">Blog</a>
            <a href="#tools">Tools</a>
            <a href="#base">Base</a>
            <a href="#custom">Custom</a>
            <a href="#more">More</a>
            <a href="#logo">Logo</a>
            <div className="dropdown">
              <a href="#friends" className="dropbtn">Friends</a>
              <div className="dropdown-content">
                <a href="#">Submenu Item 1</a>
                <a href="#">Submenu Item 2</a>
                <a href="#">Submenu Item 3</a>
              </div>
            </div>
            <div className="dropdown">
              <a href="#partners" className="dropbtn">Partners</a>
              <div className="dropdown-content">
                <a href="#">Submenu Item 1</a>
                <a href="#">Submenu Item 2</a>
                <a href="#">Submenu Item 3</a>
              </div>
            </div>
            <div className="dropdown">
              <a href="#people" className="dropbtn">People</a>
              <div className="dropdown-content">
                <a href="#">Submenu Item 1</a>
                <a href="#">Submenu Item 2</a>
                <a href="#">Submenu Item 3</a>
              </div>
            </div>
            <a href="#work">Work</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalNav;
