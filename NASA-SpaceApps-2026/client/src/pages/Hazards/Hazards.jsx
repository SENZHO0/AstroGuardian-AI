import Navbar from "../../components/common/Navbar";

export default function Hazards() {
  return (
    <div
      style={{
        backgroundColor: "#050B18",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
      }}
    >
      <Navbar />

      <h1>☢ Space Hazard Analysis Center</h1>

      <p style={{ marginTop: "10px", color: "#A0AEC0" }}>
        Assess environmental risks affecting crew health.
      </p>
    </div>
  );
}