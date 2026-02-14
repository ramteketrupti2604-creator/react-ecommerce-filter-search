import "./Colors.css";
import Input from "../../../components/Input";

function Colors({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>

      {/* "All" button ke liye value khali rakhein taaki CSS se gradient dikhe */}
      <Input
        handleChange={handleChange}
        value=""
        title="All"
        name="test1"
        color="transparent" 
      />

      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />

      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test1"
        color="blue"
      />

      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test1"
        color="red"
      />

      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test1"
        color="green"
      />

      {/* White color ke liye color="white" pass karein taaki border dikhe */}
      <Input
        handleChange={handleChange}
        value="white"
        title="White"
        name="test1"
        color="white"
      />
    </div>
  );
}

export default Colors;