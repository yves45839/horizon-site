import React from 'react';
import './PourquoiNous.css';
import { FaRecycle, FaIndustry, FaTruckMoving, FaLeaf } from 'react-icons/fa'; // Assurez-vous que react-icons est bien installé

const PourquoiNous = () => {
    const points = [
        {
            icon: <FaRecycle />,
            title: "Engagement écologique",
            description: "Gestion responsable, conformité réglementaire et réduction continue de l’empreinte carbone.",
        },
        {
            icon: <FaIndustry />,
            title: "Expertise industrielle",
            description: "Un accompagnement de la conception au pilotage opérationnel avec des équipes certifiées.",
        },
        {
            icon: <FaTruckMoving />,
            title: "Logistique optimisée",
            description: "Flotte connectée, maintenance prédictive et reporting temps réel pour sécuriser vos flux.",
        },
        {
            icon: <FaLeaf />,
            title: "Innovation verte",
            description: "Veille technologique permanente pour intégrer des solutions circulaires et digitales.",
        },
    ];

    return (
        <section id="pourquoi-nous" className="pourquoi-nous-section">
            <div className="container">
                <div className="pourquoi-header">
                    <span className="section-kicker">Pourquoi nous choisir</span>
                    <h2 className="section-title">Une alliance de rigueur environnementale et d’agilité terrain</h2>
                    <p className="section-description">
                        Nous construisons des partenariats durables, orientés résultats, où chaque intervention est
                        pilotée par la donnée et renforcée par nos engagements humains.
                    </p>
                </div>
                <div className="points-grid">
                    {points.map((point, index) => (
                        <article key={index} className="point-card">
                            <div className="icon" aria-hidden="true">{point.icon}</div>
                            <h3 className="point-title">{point.title}</h3>
                            <p className="point-description">{point.description}</p>
                        </article>
                    ))}
                </div>
                <div className="custom-phrase-container">
                    <p className="custom-phrase">
                        Horizon Environnement &amp; Logistique : votre partenaire stratégique pour conjuguer performance
                        opérationnelle et impact positif.
                    </p>
                    <div className="certifications">
                        <span>Conformité ICPE</span>
                        <span>Reporting digitalisé</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PourquoiNous;
