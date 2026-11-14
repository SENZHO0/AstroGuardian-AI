import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import BodyMap from "./pages/BodyMap/BodyMap";
import AIOfficer from "./pages/AIOfficer/AIOfficer";
import Trends from "./pages/Trends/Trends";
import CheckIn from "./pages/CheckIn/CheckIn";
import Hazards from "./pages/Hazards/Hazards";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/body-map" element={<BodyMap />} />

      <Route path="/ai-officer" element={<AIOfficer />} />

      <Route path="/trends" element={<Trends />} />

      <Route path="/checkin" element={<CheckIn />} />

      <Route path="/hazards" element={<Hazards />} />
    </Routes>
  );
}

export default App;