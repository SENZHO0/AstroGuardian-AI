function AlertsPanel() {
  const alerts = [
  {
    text: "Sleep quality declining",
    color: "#FFC857",
  },
  {
    text: "Radiation exposure elevated",
    color: "#FF5C5C",
  },
  {
    text: "Mood stable",
    color: "#00FF9D",
  },
];

  return (
    <div style={{background: "#0D1528", padding: "20px", borderRadius: "20px", marginTop: "30px",}}>
        <h2>Mission Alerts</h2>

        {alerts.map((alert, index) => (
        <p key={index} style={{color: alert.color,}}>
            {alert.text}
        </p>
        ))}
    </div>
  );
}

export default AlertsPanel;