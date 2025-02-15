import React from 'react';
import './PourquoiNous.css';
import { FaRecycle, FaIndustry, FaTruckMoving, FaLeaf } from 'react-icons/fa'; // Assurez-vous que react-icons est bien installé

const PourquoiNous = () => {
    const points = [
        {
            icon: <FaRecycle />,
            title: "Engagement Écologique",
            description: "Nous adoptons des pratiques durables pour préserver l'environnement."
        },
        {
            icon: <FaIndustry />,
            title: "Expertise Industrielle",
            description: "Des années d'expérience dans la gestion des déchets et l'assainissement."
        },
        {
            icon: <FaTruckMoving />,
            title: "Logistique Optimisée",
            description: "Une flotte moderne et optimisée pour un transport sécurisé."
        },
        {
            icon: <FaLeaf />,
            title: "Innovation Verte",
            description: "Nous investissons dans des solutions innovantes pour un avenir durable."
        }
    ];

    return (
        <section id="pourquoi-nous" className="pourquoi-nous-section">
            <h2 className="section-title">Pourquoi Nous ?</h2>
            <div className="points-grid">
                {points.map((point, index) => (
                    <div key={index} className="point-card">
                        <div className="icon">{point.icon}</div>
                        <h3 className="point-title">{point.title}</h3>
                        <p className="point-description">{point.description}</p>
                    </div>
                ))}
            </div>
            <div className="custom-phrase-container">
                <p className="custom-phrase">
                    Horizon Environnement & Logistique : Votre partenaire environnemental.
                </p>
            </div>
        </section>
    );
};

export default PourquoiNous;
