import React from "react";
import { useNavigate } from "react-router-dom";

const SolidBtn = ({name, path, color, style}) => {
	const navigate = useNavigate();
	return (
		<button
			style={{ 
				backgroundColor: color || "#1C2D80", 
				color: "#fff", 
				padding: "18px 24px", 
				border: "none", 
				borderRadius: "8px", 
				fontFamily: "Helvetica Neue",
				fontWeight: "bold",
				fontSize: "16px",
				cursor: "pointer",
				width: "fit-content",
				...style // Spread custom styles
			}}
			onClick={() => navigate(path)}>
				{name}
			</button>
	);
};

export default SolidBtn;