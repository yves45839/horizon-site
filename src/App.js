import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import NosSolutions from './components/NosSolutions';
import PourquoiNous from './components/PourquoiNous';

function App() {
    useEffect(() => {
        const animatedElements = document.querySelectorAll('[data-animate]');

        if (!('IntersectionObserver' in window)) {
            animatedElements.forEach((element) => element.classList.add('is-visible'));
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        obs.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15,
                rootMargin: '0px 0px -40px 0px',
            }
        );

        animatedElements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    const stats = [
        {
            value: '20+',
            description: 'années d’expertise cumulée de notre personnel',
        },
        {
            value: '98%',
            description: 'de taux de satisfaction client',
        },
        {
            value: 'Plusieurs',
            description: 'secteurs d’activité accompagnés au quotidien',
        },
    ];

    return (
        <div className="App">
            <Header />
            <main>
                <section id="accueil" className="hero">
                    <div className="hero-inner container">
                        <div className="hero-content" data-animate="fade-up">
                            <span className="hero-kicker">Horizon Environnement &amp; Logistique</span>
                            <h1 className="hero-title">Propulsons votre transition écologique avec des solutions sur-mesure.</h1>
                            <p className="hero-description">
                                Notre équipe accompagne les acteurs industriels et territoriaux avec des dispositifs
                                responsables, traçables et innovants pour réduire durablement leur empreinte.
                            </p>
                            <div className="hero-actions" data-animate="fade-up" style={{ '--delay': '0.15s' }}>
                                <a className="button primary" href="#nos-solutions">Découvrir nos expertises</a>
                                <a className="button secondary" href="#contact">Planifier un échange</a>
                            </div>
                            <div className="hero-stats">
                                {stats.map((stat, index) => {
                                    const delay = (0.25 + index * 0.12).toFixed(2);
                                    return (
                                        <div
                                            key={stat.value}
                                            className="stat-card"
                                            data-animate="scale-in"
                                            style={{ '--delay': `${delay}s` }}
                                        >
                                            <strong>{stat.value}</strong>
                                            <span>{stat.description}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="hero-visual" aria-hidden="true" data-animate="float-in" style={{ '--delay': '0.3s' }}>
                            <div className="hero-visual-glow" />
                            <img src="/images/header_image.png" alt="Illustration environnementale" />
                        </div>
                    </div>
                </section>
                <NosSolutions />
                <section className="impact-section" id="impact">
                    <div className="container impact-wrapper">
                        <div className="impact-highlight" data-animate="fade-up">
                            <h2>Une empreinte positive, mesurable et durable</h2>
                            <p>
                                Nous combinons la data, la logistique et l’ingénierie environnementale pour générer un
                                impact mesurable sur vos chaînes d’approvisionnement et vos infrastructures.
                            </p>
                        </div>
                        <div className="impact-grid">
                            {[
                                {
                                    metric: '-35%',
                                    description: 'de réduction de déchets dangereux dès la première année.',
                                },
                                {
                                    metric: '100%',
                                    description: 'de traçabilité assurée via nos rapports digitaux sécurisés.',
                                },
                                {
                                    metric: '24/7',
                                    description: 'pilotage et interventions planifiés par nos équipes terrain.',
                                },
                            ].map((item, index) => {
                                const delay = (0.15 + index * 0.1).toFixed(2);
                                return (
                                    <div
                                        key={item.metric}
                                        className="impact-card"
                                        data-animate="fade-up"
                                        style={{ '--delay': `${delay}s` }}
                                    >
                                        <span className="impact-metric">{item.metric}</span>
                                        <p>{item.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
                <PourquoiNous />
                <section className="cta-section" id="contact">
                    <div className="container cta-inner" data-animate="fade-up">
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
