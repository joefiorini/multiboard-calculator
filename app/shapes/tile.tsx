const Octagon = ({
  radius = 30,
  stroke = "#ffffff",
  fill = "#1e1e1e",
  strokeWidth = 2,
}) => {
  // Function to calculate octagon points based on radius
  const calculateOctagonPoints = (radius: number) => {
    const angleStep = (2 * Math.PI) / 8; // 8 sides
    const points = [];
    for (let i = 0; i < 8; i++) {
      const angle = angleStep * i - Math.PI / 8; // Start rotated 22.5 degrees for upright orientation
      const x = 50 + radius * Math.cos(angle); // Center at (50, 50)
      const y = 50 + radius * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return points.join(" ");
  };

  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Octagon */}
      <polygon
        points={calculateOctagonPoints(radius)}
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
      />
    </svg>
  );
};

const Rhombus = () => (
  <rect
    x="-5"
    y="-5"
    width="37"
    height="37"
    stroke="#ffffff"
    strokeWidth="8"
    fill="#1e1e1e"
  />
);

export const Tile = () => {
  return (
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <Octagon radius={50} stroke="#ffffff" strokeWidth={8} fill="#1e1e1e" />
      <g transform="translate(198,78) rotate(45)">
        <Rhombus />
      </g>
      <g transform="translate(100,0)">
        <Octagon radius={50} stroke="#ffffff" strokeWidth={8} fill="#1e1e1e" />
      </g>
      <g transform="translate(98,78) rotate(45)">
        <Rhombus />
      </g>
    </svg>
  );
};
