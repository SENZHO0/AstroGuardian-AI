import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", heartRate: 72 },
  { day: "Tue", heartRate: 74 },
  { day: "Wed", heartRate: 73 },
  { day: "Thu", heartRate: 76 },
  { day: "Fri", heartRate: 75 },
  { day: "Sat", heartRate: 77 },
  { day: "Sun", heartRate: 74 },
];

function HealthTrendChart() {
  return (
    <div
      style={{
        background: "#0D1528",
        padding: "20px",
        borderRadius: "20px",
        marginTop: "30px",
      }}
    >
      <h2
        style={{
          color: "#00E5FF",
          marginBottom: "20px",
        }}
      >
        📈 Heart Rate Trend
      </h2>

      <div
        style={{
          width: "100%",
          height: 300,
        }}
      >
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid stroke="#22304A" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="heartRate"
              stroke="#00E5FF"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default HealthTrendChart;