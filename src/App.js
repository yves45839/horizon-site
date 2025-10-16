import React from 'react';
import './App.css';
import Header from './components/Header';
import NosSolutions from './components/NosSolutions';
import PourquoiNous from './components/PourquoiNous';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <section id="accueil" className="hero">
                    <div className="hero-inner container">
                        <div className="hero-content">
                            <span className="hero-kicker">Horizon Environnement &amp; Logistique</span>
                            <h1 className="hero-title">Propulsons votre transition écologique avec des solutions sur-mesure.</h1>
                            <p className="hero-description">
                                Notre équipe accompagne les acteurs industriels et territoriaux avec des dispositifs
                                responsables, traçables et innovants pour réduire durablement leur empreinte.
                            </p>
                            <div className="hero-actions">
                                <a className="button primary" href="#nos-solutions">Découvrir nos expertises</a>
                                <a className="button secondary" href="#contact">Planifier un échange</a>
                            </div>
                            <div className="hero-stats">
                                <div className="stat-card">
                                    <strong>20+</strong>
                                    <span>années d’expertise cumulée</span>
                                </div>
                                <div className="stat-card">
                                    <strong>98%</strong>
                                    <span>de taux de satisfaction client</span>
                                </div>
                                <div className="stat-card">
                                    <strong>12</strong>
                                    <span>secteurs accompagnés au quotidien</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero-visual" aria-hidden="true">
                            <div className="hero-visual-glow" />
                            <img src="/images/header_image.svg" alt="Illustration environnementale" />
                        </div>
                    </div>
                </section>
                <NosSolutions />
                <section className="impact-section" id="impact">
                    <div className="container impact-wrapper">
                        <div className="impact-highlight">
                            <h2>Une empreinte positive, mesurable et durable</h2>
                            <p>
                                Nous combinons la data, la logistique et l’ingénierie environnementale pour générer un
                                impact mesurable sur vos chaînes d’approvisionnement et vos infrastructures.
                            </p>
                        </div>
                        <div className="impact-grid">
                            <div className="impact-card">
                                <span className="impact-metric">-35%</span>
                                <p>de réduction de déchets dangereux dès la première année.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-metric">100%</span>
                                <p>de traçabilité assurée via nos rapports digitaux sécurisés.</p>
                            </div>
                            <div className="impact-card">
                                <span className="impact-metric">24/7</span>
                                <p>pilotage et interventions planifiés par nos équipes terrain.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <PourquoiNous />
                <section className="cta-section" id="contact">
                    <div className="container cta-inner">
                        <div>
                            <h2>Prêts à accélérer vos engagements RSE ?</h2>
                            <p>
                                Ensemble, concevons une stratégie environnementale ambitieuse, conforme aux normes et
                                parfaitement adaptée à vos enjeux opérationnels.
                            </p>
                        </div>
                        <a className="button primary" href="mailto:info@horizonenvironnement.com">Écrire à nos experts</a>
                    </div>
                </section>
            </main>
            <footer className="App-footer">
                <p>
                    © {new Date().getFullYear()} Horizon Environnement &amp; Logistique — info@horizonenvironnement.com —
                    27 22 31 27 01
                </p>
                <p>Powered by Lumikode | Label Retail</p>
            </footer>
        </div>
    );
}

export default App;
