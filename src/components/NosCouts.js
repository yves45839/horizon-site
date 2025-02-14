import React from 'react';
import './NosCouts.css';

const NosCouts = () => {
    return (
        <section id="nos-couts" className="section">
            <h2>Nos Coûts</h2>
            <div className="pricing">
                <div className="pricing-plan">
                    <h3>Pack Standard</h3>
                    <p>30 000 FCFA/Mois</p>
                    <ul>
                        <li>Publications sur les réseaux sociaux</li>
                        <li>Gestion de Communauté</li>
                        <li>Création de Contenu</li>
                        <li>Rapport de Performance</li>
                    </ul>
                    <button>Souscrire</button>
                </div>
                <div className="pricing-plan">
                    <h3>Pack Premium</h3>
                    <p>100 000 FCFA/Mois</p>
                    <ul>
                        <li>Tout du Pack Standard</li>
                        <li>Optimisation SEO</li>
                        <li>Gestion Complète des Réseaux Sociaux</li>
                        <li>Création de Site Web</li>
                        <li>Emails Pro illimités</li>
                    </ul>
                    <button>Souscrire</button>
                </div>
                <div className="pricing-plan">
                    <h3>Offre Sur Mesure</h3>
                    <p>Nous sommes uniques Vos besoins aussi,profitez de notre service
                    Personnalisé après consultation</p>
                    <button>Contactez-nous</button>
                </div>
            </div>
        </section>
    );
};

export default NosCouts;
