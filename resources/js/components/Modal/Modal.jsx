import React, { useState, useEffect } from "react";
import styles from "../../Pages/ContactUs/Sections/TextField/TextField.module.scss";

const Modal = ({ type, title, message, onClose }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 10);
        return () => clearTimeout(t);
    }, []);

    const handleClose = () => {
        setVisible(false);
        setTimeout(onClose, 280);
    };

    const icons = {
        success: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M8.5 14.5l4 4 7-8" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        error: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M10 10l8 8M18 10l-8 8" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        warning: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 9v6M14 18v1" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    };

    const accentColors = {
        success: "#22c55e",
        error: "#ef4444",
        warning: "#eab308",
    };

    return (
        <div
            className={styles.modalOverlay}
            onClick={handleClose}
            style={{ opacity: visible ? 1 : 0 }}
        >
            <div
                className={styles.modalBox}
                onClick={(e) => e.stopPropagation()}
                style={{
                    boxShadow: `0 0 0 1px ${accentColors[type]}22, 0 24px 60px rgba(0,0,0,0.6)`,
                    transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.96)",
                    opacity: visible ? 1 : 0,
                }}
            >
                <div
                    className={styles.modalAccentBar}
                    style={{ background: accentColors[type] }}
                />
                <div className={styles.modalHeader}>
                    {icons[type]}
                    <span className={styles.modalTitle}>{title}</span>
                </div>
                <p className={styles.modalMessage}>{message}</p>
                <div className={styles.modalFooter}>
                    <button
                        className={styles.modalBtn}
                        style={{ background: accentColors[type] }}
                        onClick={handleClose}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                        Got it
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;