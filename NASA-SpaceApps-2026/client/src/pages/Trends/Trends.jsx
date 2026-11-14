import Navbar from "../../components/common/Navbar";

export default function Trends() {
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

      <h1>📈 Health Trends & Analytics</h1>

      <p style={{ marginTop: "10px", color: "#A0AEC0" }}>
        Analyze long-term changes in astronaut health metrics.
      </p>
    </div>
  );
}