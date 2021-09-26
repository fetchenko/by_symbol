import React from "react";
import Link, {
  SIZES as LINK_SIZES,
  TYPES as LINK_TYPES,
} from "~/components/button-link";
import Text, {
  COLORS as TEXT_COLORS,
  SIZES as TEXT_SIZES,
} from "~/components/text";

const sizes = ["xs", "sm", "md", "lg", "xl"];

export default function TestUi() {
  return (
    <div>
      <p>font sizes</p>
      <div>
        {sizes.map((fontSize) => (
          <p style={{ fontSize: `var(--font-size-${fontSize})` }}>
            fontSize: {fontSize}
          </p>
        ))}
      </div>
      <p>Links</p>
      <div>
        <p>sizes</p>
        {Object.values(LINK_SIZES).map((size) => (
          <Link size={size}>{`link size: ${size}`}</Link>
        ))}
        <p>TYPES</p>
        {Object.values(LINK_TYPES).map((type) => (
          <Link type={type}>{`link type: ${type}`}</Link>
        ))}
        <p> active link</p>
        <Link active>active link</Link>
        <hr />

        {Object.values(TEXT_COLORS).map((color) => (
          <Text color={color}>{`text color: ${color}`}</Text>
        ))}

        {Object.values(TEXT_SIZES).map((size) => (
          <Text size={size}>{`text size: ${size}`}</Text>
        ))}
      </div>
    </div>
  );
}
