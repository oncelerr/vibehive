import React from "react";
import { useNavigate } from "react-router-dom";

const ContactUsBTN = () => {
	const navigate = useNavigate();

	return (
		<button
			style={{ 
				backgroundColor: "#fff", 
				color: "#000", 
				padding: "14px 24px", 
				border: "none", 
				borderRadius: "20px", 
				cursor: "pointer",
				fontFamily: 'Helvetica Neue',
				fontSize: '16px',
			}}
			onClick={() => navigate('/contact')}
			>
				Contact Us
			</button>
	);
};

export default ContactUsBTN;