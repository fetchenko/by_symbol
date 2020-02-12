import React from "react";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column"
  }
};

const Slider = props => {
  const { label, value, onChange, min = 1, max = 100 } = props;

  return (
    <div style={styles.root}>
      <label>{label}</label>
      <input
        value={value}
        onChange={event => {
          if (onChange) {
            onChange(event);
          }
        }}
        type="range"
        min={min}
        max={max}
      />
    </div>
  );
};

export default Slider;
