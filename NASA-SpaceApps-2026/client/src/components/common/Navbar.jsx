import { Link } from "react-router-dom";

function Navbar() {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
    <div
      style={{
        background: "#0D1528",
        padding: "20px",
        borderRadius: "15px",
        marginBottom: "30px",
        display: "flex",
        gap: "20px",
      }}
    >
      <Link style={linkStyle} to="/">
        Dashboard
      </Link>

      <Link style={linkStyle} to="/body-map">
        Body Map
      </Link>

      <Link style={linkStyle} to="/ai-officer">
        AI Officer
      </Link>

      <Link style={linkStyle} to="/trends">
        Trends
      </Link>

      <Link style={linkStyle} to="/checkin">
        Check In
      </Link>

      <Link style={linkStyle} to="/hazards">
        Hazards
      </Link>
    </div>
  );
}

export default Navbar;