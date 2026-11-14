function OrganButton({icon, label, onClick, isSelected}) {
    return (
        <button onClick={onClick} style={{background: isSelected ? "#00E5FF" : "#0D1528", color: "white", border: "none", padding: "12px 20px", borderRadius: "12px", cursor: "pointer", boxShadow: isSelected ? "0 0 15px #00E5FF" : "none",}}>
            {icon} {label}
        </button>
    );
}

export default OrganButton;