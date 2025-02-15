import React from 'react';
import './NosSolutions.css';

const services = [
    {
        title: "Gestion des Déchets",
        description: "Collecte, transport et traitement des déchets industriels et dangereux.",
        image: "/images/waste_management.jpg",
    },
    {
        title: "Nettoyage Industriel",
        description: "Nettoyage et entretien des installations industrielles et canalisations.",
        image: "/images/industrial_cleaning.jpg",
    },
    {
        title: "Transport et Logistique",
        description: "Transport sécurisé et logistique pour divers secteurs industriels.",
        image: "/images/logistics_transport.jpg",
    },
    {
        title: "Valorisation des Déchets",
        description: "Recyclage et valorisation des matières pour un environnement durable.",
        image: "/images/waste_recycling.jpg",
    },
    {
        title: "Hydrocurage et Curage",
        description: "Services spécialisés pour le curage et l'entretien des réseaux d'assainissement.",
        image: "/images/hydrocleaning.jpg",
    },
    {
        title: "Location d'Engins",
        description: "Mise à disposition d'engins pour vos besoins en travaux et logistique.",
        image: "/images/machinery_rental.jpg",
    },
];

const NosSolutions = () => {
    return (
        <section id="nos-solutions" className="solutions-section">
            <h2 className="solutions-title">Horizon Environnement et Logistique</h2>
            <div className="solutions-grid">
                {services.map((service, index) => (
                    <div key={index} className="solution-card">
                        <img src={service.image} alt={service.title} className="solution-image" />
                        <div className="solution-content">
                            <h3 className="solution-title">{service.title}</h3>
                            <p className="solution-description">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NosSolutions;
