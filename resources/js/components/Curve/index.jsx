import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { text, curve, translate } from './anim';
import './index.css';

const routes = {
    '/': 'Home',
    '/login': 'Login',
    // Add more routes here as needed
};

const anim = (variants) => ({
    variants,
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
});

const SVG = ({ height, width }) => {
    const initialPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `;

    const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `;

    return (
        <motion.svg className="curve-svg" {...anim(translate)}>
            <motion.path {...anim(curve(initialPath, targetPath))} />
        </motion.svg>
    );
};

export default function Curve({ children }) {
    const location = useLocation();
    const [dimensions, setDimensions] = useState({ width: null, height: null });

    useEffect(() => {
        const resize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        resize();
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, []);

    const routeLabel = routes[location.pathname] || location.pathname.replace('/', '');

    return (
        <div className="curve-container">
            {/* Flash prevention background while dimensions load */}
            <div
                className="curve-background"
                style={{ opacity: dimensions.width == null ? 1 : 0, transition: 'opacity 0s' }}
            />
            <motion.p className="curve-route-label" {...anim(text)}>
                {routeLabel}
            </motion.p>
            {dimensions.width != null && (
                <SVG width={dimensions.width} height={dimensions.height} />
            )}
            {children}
        </div>
    );
}