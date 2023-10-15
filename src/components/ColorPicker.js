import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorList = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  return (
    <div>
      <button onClick={toggleColorList}>Pick a color</button>
      {showColorList && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-swatch"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && (
        <p>Selected Color: {selectedColor}</p>
      )}
    </div>
  );
};

export default ColorPicker;
