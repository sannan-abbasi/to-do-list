import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("pink");
  function handleColorChange(event) {
    setColor((prev) => {
      console.log(prev);
      return event.target.value;
    });
    // setColor(event.target.value);
  }
  return (
    <div className="colorpickercountainer">
      <h1>Color Picker </h1>
      <div className="colordisplay" style={{ backgroundColor: color }}>
        <p>Select Color</p>
      </div>
      <label>Select a Colour:</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}
export default ColorPicker;
