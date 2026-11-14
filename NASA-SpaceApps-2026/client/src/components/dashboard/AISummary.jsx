function AISummary() {
  return (
    <div
      style={{
        background: "#0D1528",
        padding: "20px",
        borderRadius: "20px",
        marginTop: "30px",
        border: "1px solid #00E5FF",
      }}
    >
      <h2
        style={{
          color: "#00E5FF",
          marginBottom: "15px",
        }}
      >
        🤖 AI Health Summary
      </h2>

      <p>
        Astronaut health remains stable.
      </p>

      <p>
        Sleep quality shows a slight decline
        over the last 48 hours.
      </p>

      <p>
        Radiation exposure remains within
        acceptable mission limits.
      </p>

      <p>
        Recommended action:
        increase recovery sleep by 1 hour.
      </p>
    </div>
  );
}

export default AISummary;