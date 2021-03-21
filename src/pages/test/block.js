import React, { useState } from "react";

export default function Block() {
  const [value, setValue] = useState("");

  return (
    <div className="input-block">
      <input value={value} onChange={(e) => setValue(e.target.value)}></input>
      <p className="input-value">{`Input value: ${value}`}</p>
    </div>
  );
}
