import React, { useState, useEffect } from 'react';
import './NotreApproche.css';

const steps = [
    "Analyse Initiale",
    "Définition des Objectifs",
    "Mise en Œuvre",
    "Suivi et Ajustement"
];

const NotreApproche = () => {
    const [visibleSteps, setVisibleSteps] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleSteps(prev => {
                if (prev.length < steps.length) {
                    return [...prev, steps[prev.length]];
                } else {
                    clearInterval(interval);
                    return prev;
                }
            });
        }, 1000); // Change 1000 to adjust the delay between steps

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="notre-approche" className="approach-section">
            <h2 className="section-title">Notre Approche</h2>
            <ul className="approach-list">
                {visibleSteps.map((step, index) => (
                    <li key={index} className="approach-step">{step}</li>
                ))}
            </ul>
        </section>
    );
};

export default NotreApproche;
