import Navbar from "../../components/common/Navbar";

export default function AIOfficer() {
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

        <h1>🤖 AI Medical Officer</h1>

        <p style={{ marginTop: "10px", color: "#A0AEC0" }}>
            Your onboard intelligent health assistant.
        </p>
    </div>
  );
}
