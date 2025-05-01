import { IoPerson } from "react-icons/io5";
import { FaGrinHearts } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  const bag = useSelector((store) => store.bag);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>

      {/* Hamburger Button */}
      <button className="menu_toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <FiMenu size={24} />
      </button>

      <nav className={`nav_bar ${menuOpen ? "open" : ""}`}>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#" className="studio-link">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <IoPerson />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <FaGrinHearts />
          <span className="action_name">Wishlist</span>
        </div>

        <Link
          className="action_container text-black
          bag_container
        "
          to="/bag"
        >
          <FaBagShopping />
          <span className="action_name">Bag</span>

          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
