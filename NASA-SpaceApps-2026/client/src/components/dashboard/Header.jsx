function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
      }}
    >
      <div>
        <h1
          style={{
            color: "#00E5FF",
            marginBottom: "10px",
          }}
        >
          🚀 AstroGuardian AI
        </h1>

        <p style={{ color: "#A0AEC0" }}>
          Mars Expedition Alpha
        </p>
      </div>

      <div
        style={{
          background: "#0D1528",
          padding: "15px",
          borderRadius: "12px",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            color: "#00FF9D",
          }}
        >
          ONLINE
        </h3>

        <p>Crew Health System</p>
      </div>
    </div>
  );
}

export default Header;