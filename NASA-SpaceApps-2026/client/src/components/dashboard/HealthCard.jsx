function HealthCard({ title, value, color }) {
  return (
    <div
      style={{
        background: "#0D1528",
        padding: "20px",
        borderRadius: "15px",
        borderLeft: `5px solid ${color}`,
        transition: "0.3s",
        boxShadow: `0 0 15px ${color}30`,
      }}
    >
      <h3
        style={{
          color: "#A0AEC0",
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          color,
          fontSize: "2rem",
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export default HealthCard;