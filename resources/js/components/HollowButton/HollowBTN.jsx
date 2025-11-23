import React from "react";
import { useNavigate } from "react-router-dom";

const HollowBtn = ({name, path, color}) => {
	const navigate = useNavigate();
	return (
		<button
			style={{ 
				backgroundColor: "transparent",
				color: color, 
				padding: "18px 24px", 
				border: "1px solid " + color, 
				borderRadius: "8px", 
				cursor: "pointer",
				fontFamily: "Helvetica Neue",
				fontWeight: "bold",
				fontSize: "16px",
				zIndex: 2,
				textAlign: 'center'
			}}
			onClick={() => navigate(path)}
			>
				{name}
			</button>
	);
};

export default HollowBtn;