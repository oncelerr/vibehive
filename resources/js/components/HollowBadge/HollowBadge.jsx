import React from "react";
import { useNavigate } from "react-router-dom";

const HollowBadge = ({ name, color, style }) => {
    const navigate = useNavigate();
    return (
        <div style={{ border: "1px solid " + color, padding: "8px 16px", borderRadius: "50px", width: "fit-content", ...style}}>
            <p style={{ color: color, fontSize: "16px", fontFamily: "Helvetica Neue"}}>{name}</p>
        </div>
    );
};

export default HollowBadge;
