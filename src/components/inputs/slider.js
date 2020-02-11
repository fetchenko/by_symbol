import React, { useState } from "react";

const Slider = () => {
  const [value, setValue] = useState(10);

  return (
    <div>
      <p>Custom range slider:</p>
      <input
        value={value}
        onChange={event => {
          setValue(event.target.value);
        }}
        type="range"
        min="1"
        max="100"
        class="slider"
        id="myRange"
      />
    </div>
  );
};

export default Slider;
