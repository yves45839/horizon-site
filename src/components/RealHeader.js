import React from 'react';
import './RealHeader.css'; 

const RealHeader = () => {
    return (
        <header className="real-header">
            <div className="nav-container">
                <div className="logo" aria-label="Horizon Environnement &amp; Logistique">
                    <img src="/images/logo_nature.svg" alt="Emblème naturel Horizon Environnement" />
                </div>
                <nav aria-label="Navigation principale">
                    <ul className="nav-list">
                        <li><a href="#accueil">Accueil</a></li>
                        <li><a href="#nos-solutions">Nos solutions</a></li>
                        <li><a href="#impact">Impact</a></li>
                        <li><a href="#pourquoi-nous">Pourquoi nous</a></li>
                    </ul>
                </nav>
                <a className="nav-cta" href="#contact">Demander un devis</a>
            </div>
        </header>
    );
};

export default RealHeader;
