import React from 'react';
import './RealHeader.css'; 

const RealHeader = () => {
    return (
        <header className="real-header">
            <div className="logo">
                <img src="/images/logo_lumikode.png" alt="LumiKode Logo" />
            </div>
            <nav>
                <ul className="nav-list">
                    <li><a href="#nos-solutions">Nos Solutions</a></li>
                    <li><a href="#pourquoi-nous">Pourquoi Nous</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default RealHeader;
