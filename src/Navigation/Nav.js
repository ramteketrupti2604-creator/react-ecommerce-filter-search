 import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import "./Nav.css";

function Nav({ query, handleInputChange }) {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your Search Shoes."
          onChange={handleInputChange}
          value={query}
        />
      </div>

      <div className="profile-container">
        <button type="button">
          <FiHeart className="nav-icons" />
        </button>

        <button type="button">
          <AiOutlineShoppingCart className="nav-icons" />
        </button>

        <button type="button">
          <AiOutlineUser className="nav-icons" />
        </button>
      </div>
    </nav>
  );
}

export default Nav;