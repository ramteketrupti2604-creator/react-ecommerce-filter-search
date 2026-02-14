import "./Sidebar.css";
import Category from "./Category/Category";
import Colors from "./Category/Colors/Colors"; // Path change kiya
import Price from "./Category/Price/Price";   // Path change kiya

function Sidebar({handleChange, selectedCategory}) {
  
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange}
           selectedCategory={selectedCategory}
        />
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
      </section>
    </>
  );
}

export default Sidebar;