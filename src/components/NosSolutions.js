import React from 'react';
import './NosSolutions.css';

const services = [
    {
        title: "Gestion des Déchets",
        description: "Collecte, transport et traitement des déchets industriels et dangereux.",
        image: "/images/waste_management.jpg",
        tag: "Traçabilité",
    },
    {
        title: "Nettoyage Industriel",
        description: "Nettoyage et entretien des installations industrielles et canalisations.",
        image: "/images/industrial_cleaning.jpg",
        tag: "Performance",
    },
    {
        title: "Transport et Logistique",
        description: "Transport sécurisé et logistique pour divers secteurs industriels.",
        image: "/images/logistics_transport.jpg",
        tag: "Réactivité",
    },
    {
        title: "Valorisation des Déchets",
        description: "Recyclage et valorisation des matières pour un environnement durable.",
        image: "/images/waste_recycling.jpg",
        tag: "Économie circulaire",
    },
    {
        title: "Hydrocurage et Curage",
        description: "Services spécialisés pour le curage et l'entretien des réseaux d'assainissement.",
        image: "/images/hydrocleaning.jpg",
        tag: "Expertise terrain",
    },
    {
        title: "Location d'Engins",
        description: "Mise à disposition d'engins pour vos besoins en travaux et logistique.",
        image: "/images/machinery_rental.jpg",
        tag: "Flexibilité",
    },
];

const NosSolutions = () => {
    return (
        <section id="nos-solutions" className="solutions-section">
            <div className="container">
                <span className="section-kicker">Nos expertises</span>
                <h2 className="solutions-title">Des solutions écologiques et logistiques orchestrées de bout en bout</h2>
                <p className="solutions-description">
                    Nous concevons des dispositifs intégrés et adaptables pour répondre aux exigences réglementaires,
                    optimiser vos opérations et créer de la valeur environnementale sur toute la chaîne.
                </p>
                <div className="solutions-grid">
                    {services.map((service, index) => (
                        <article key={index} className="solution-card">
                            <div className="solution-image-wrapper">
                                <img src={service.image} alt={service.title} className="solution-image" />
                                <span className="solution-tag">{service.tag}</span>
                            </div>
                            <div className="solution-content">
                                <span className="solution-index">0{index + 1}</span>
                                <h3 className="solution-title">{service.title}</h3>
                                <p className="solution-description">{service.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NosSolutions;
