 import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import "./Nav.css";

// 1. Function ke bracket mein { query, handleInputChange } likhna zaroori hai
function Nav({ query, handleInputChange }) {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your Search Shoes."
          // 2. handleInputChange ko onChange se connect kiya
          onChange={handleInputChange} 
          // 3. value ko query state se connect kiya
          value={query} 
        />
      </div>

      <div className="profile-container">
        <button href="#">
          <FiHeart className="nav-icons" />
        </button>

        <button href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </button>

        <button href="#">
          <AiOutlineUser className="nav-icons" />
        </button>
      </div>
    </nav>
  );
}

export default Nav;