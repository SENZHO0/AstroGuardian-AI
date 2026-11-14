import Navbar from "../../components/common/Navbar";

export default function CheckIn() {
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

      <h1>📝 Daily Health Check-In</h1>

      <p style={{ marginTop: "10px", color: "#A0AEC0" }}>
        Record today's physical and mental health status.
      </p>
    </div>
  );
}