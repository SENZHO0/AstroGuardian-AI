function MissionScore() {
  return (
    <div
      style={{
        background: "#0D1528",
        padding: "30px",
        borderRadius: "20px",
        width: "320px",
        textAlign: "center",
        boxShadow: "0 0 20px rgba(0,255,157,0.35)",
      }}
    >
      <h2>Mission Readiness</h2>

      <div
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          border: "10px solid #00FF9D",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px auto",
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            color: "#00FF9D",
            margin: 0,
          }}
        >
          87
        </h1>

        <p
          style={{
            margin: 0,
            color: "#A0AEC0",
          }}
        >
          %
        </p>
      </div>

      <h3
        style={{
          color: "#00FF9D",
        }}
      >
        MISSION READY
      </h3>
    </div>
  );
}

export default MissionScore;
