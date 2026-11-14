function AstronautProfile() {
  return (
    <div
      style={{
        background: "#0D1528",
        padding: "20px",
        borderRadius: "20px",
        marginBottom: "30px",
      }}
    >
      <h2
        style={{
          color: "#00E5FF",
          marginBottom: "15px",
        }}
      >
        🧑‍🚀 Astronaut Profile
      </h2>

      <p>
        <strong>Name:</strong> Sarah Chen
      </p>

      <p>
        <strong>Mission:</strong> Mars Expedition Alpha
      </p>

      <p>
        <strong>Days in Space:</strong> 127
      </p>

      <p>
        <strong>Status:</strong>
        <span
          style={{
            color: "#00FF9D",
            marginLeft: "8px",
          }}
        >
          Healthy
        </span>
      </p>
    </div>
  );
}

export default AstronautProfile;