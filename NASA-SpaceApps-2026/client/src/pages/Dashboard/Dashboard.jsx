import HealthCard from "../../components/dashboard/HealthCard";
import Navbar from "../../components/common/Navbar";
import MissionScore from "../../components/dashboard/MissionScore";
import AlertsPanel from "../../components/dashboard/AlertsPanel";
import AISummary from "../../components/dashboard/AISummary";
import Header from "../../components/dashboard/Header";
import HealthTrendChart from "../../components/dashboard/HealthTrendChart";
import AstronautProfile from "../../components/dashboard/AstronautProfile";
import HazardStatus from "../../components/dashboard/HazardStatus";


export default function Dashboard() {
  const cards = [
    {
      title: "Heart Rate",
      value: "72 BPM",
      color: "#FF5C5C",
    },
    {
      title: "Sleep",
      value: "7.5 Hours",
      color: "#00E5FF",
    },
    {
      title: "Radiation",
      value: "Low",
      color: "#FFC857",
    },
    {
      title: "Mood",
      value: "8/10",
      color: "#00FF9D",
    },
  ];

  return (
    <div style={{backgroundColor: "#050B18", minHeight: "100vh", color: "white", padding: "30px",}}>
        <Navbar />
        <Header />
        <AstronautProfile />
        <div style={{display: "flex", gap: "20px", alignItems: "stretch", flexWrap: "wrap", marginBottom: "30px",}}>
            <MissionScore />
            <div style={{flex: 1,}}>
                <AISummary />
            </div>
        </div>

      <h2 style={{ marginBottom: "20px" }}>
        Health Metrics
      </h2>

      <div
        style={{
            display: "grid",
            gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
        }}
      >
        {cards.map((card) => (
            <HealthCard
            key={card.title}
            title={card.title}
            value={card.value}
            color={card.color}
        />
    ))}
      </div>
        <AlertsPanel />
        <HealthTrendChart />
        <HazardStatus />
    </div>
  );
}
