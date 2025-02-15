import React, { useEffect, useState } from 'react';
import './Header.css';
import RealHeader from './RealHeader';

const codeLines = [
    "Bienvenue chez Horizon Environnement & Logistique",
    "Votre partenaire en durabilité",
];

const Header = () => {
    const [hidden, setHidden] = useState(false);
    const [showRealHeader, setShowRealHeader] = useState(false);

    useEffect(() => {
        const totalDelay = 3.5 + 3.5;
        const hideTimeout = setTimeout(() => {
            setHidden(true);
            setTimeout(() => setShowRealHeader(true), 1000);
        }, totalDelay * 1000);

        return () => clearTimeout(hideTimeout);
    }, []);

    return (
        <>
            {!showRealHeader && (
                <header className={`header ${hidden ? 'hidden' : ''}`}>
                    <div className="code-banner">
                        {codeLines.map((line, index) => (
                            <div key={index} className={`code-line line-${index}`}>
                                {line}
                            </div>
                        ))}
                    </div>
                </header>
            )}
            {showRealHeader && <RealHeader />}
        </>
    );
};

export default Header;
