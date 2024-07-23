import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Indulge in the convenience of ordering your favorite food from our
          menu with just a few clicks.Simply browse our selection, customize
          your order, and await the deliciousness delivered straight to your
          door. Elevate your dining experience today with our effortless online
          ordering system
        </p>
        <a href="#explore-menu"><button>View Menu &nbsp; &rarr;</button></a>
      </div>
    </div>
  );
};

export default Header;
