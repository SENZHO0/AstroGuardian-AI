function HazardStatus() {
  const hazards = [
    {
      name: "Radiation",
      status: "Moderate",
      color: "#FFC857",
    },
    {
      name: "Isolation",
      status: "Low",
      color: "#00FF9D",
    },
    {
      name: "Microgravity",
      status: "Monitor",
      color: "#00E5FF",
    },
  ];

  return (
    <div
      style={{
        background: "#0D1528",
        padding: "20px",
        borderRadius: "20px",
        marginTop: "30px",
      }}
    >
      <h2
        style={{
          color: "#00E5FF",
          marginBottom: "15px",
        }}
      >
        ☢ Space Hazard Status
      </h2>

      {hazards.map((hazard) => (
        <p
          key={hazard.name}
          style={{
            color: hazard.color,
          }}
        >
          {hazard.name}: {hazard.status}
        </p>
      ))}
    </div>
  );
}

export default HazardStatus;