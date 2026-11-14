import { useState } from "react";
import Navbar from "../../components/common/Navbar";
import OrganButton from "../../components/bodymap/OrganButton";

export default function BodyMap() {
    const [selectedOrgan, setSelectedOrgan] = useState("Brain");
    const organInfo = {
        Brain: {
            status: "Stable",
            metric: "Stress Level: Low",
            risk: "Minimal Cognitive Fatigue",
            recommendation:
                "Maintain healthy sleep schedule.",
        },

        Heart: {
            status: "Healthy",
            metric: "Heart Rate: 72 BPM",
            risk: "No Cardiovascular Concerns",
            recommendation:
                "Continue daily cardiovascular exercise.",
        },

        Bones: {
            status: "Monitor",
            metric: "Bone Density: 94%",
            risk: "Minor Microgravity Impact",
            recommendation:
                "Perform resistance training exercises.",
        },

        Radiation: {
            status: "Moderate",
            metric: "Exposure: Safe Range",
            risk: "Continue Monitoring",
            recommendation:
                "Limit unnecessary EVA activities",
        },

        Lungs: {
            status: "Healthy",
            metric: "Oxygen Saturation: 98%",
            risk: "No Respiratory Concerns",
            recommendation:
                "Maintain regular breathing exercises.",
        },
    };

    const organs = [
        {
            icon: "🧠",
            label: "Brain",
        },
        {
            icon: "❤️",
            label: "Heart",
        },
        {
            icon: "🦴",
            label: "Bones",
        },
        {
            icon: "☢",
            label: "Radiation",
        },
        {
            icon: "🫁",
            label: "Lungs",
        },
    ];

    return (
    <div style={{backgroundColor: "#050B18", minHeight: "100vh", color: "white", padding: "30px",}}>
        <Navbar />

        <h1 style={{color: "#00E5FF", marginBottom: "20px",}}>
            🧍 Interactive Human Body Map
        </h1>

        <p style={{color: "#A0AEC0", marginBottom: "30px",}}>
            Select a body system to view astronaut health information.
        </p>

        <div style={{display: "flex", gap: "15px", flexWrap: "wrap", marginBottom: "30px",}}>
            {organs.map((organ) => (
                <OrganButton
                    key={organ.label}
                    icon={organ.icon}
                    label={organ.label}
                    isSelected={selectedOrgan === organ.label}
                    onClick={() => setSelectedOrgan(organ.label)}
                />
            ))}

            <div style={{background: "#0D1528", padding: "25px", borderRadius: "20px",}}>
                <div style={{background: "#0D1528", padding: "25px", borderRadius: "20px",}}>
                    <h2>
                        {selectedOrgan}
                    </h2>

                    <p>
                        <strong>Status:</strong>{" "}
                        <span style={{color: organInfo[selectedOrgan].status === "Healthy" ? "#00FF9D" : organInfo[selectedOrgan].status === "Monitor" ? "#FFC857" : "#00E5FF",}}>
		                    {organInfo[selectedOrgan].status}
	                    </span>
                    </p>

                    <p>
                        <strong>Metric:</strong>{" "}
                        {organInfo[selectedOrgan].metric}
                    </p>

                    <p>
                        <strong>Risk:</strong>{" "}
                        {organInfo[selectedOrgan].risk}
                    </p>
                    
                    <p>
                        <strong>Recommendation:</strong>{" "}
                        {organInfo[selectedOrgan].recommendation}
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}