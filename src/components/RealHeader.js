import React, { useEffect, useState } from 'react';
import './RealHeader.css';

const RealHeader = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 24);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`real-header ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="logo" aria-label="Horizon Environnement &amp; Logistique">
                    <img src="/images/logo_lumikode.png" alt="Logo Horizon Environnement" />
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
