import React from 'react';
import './App.css';
import Header from './components/Header'; // Assurez-vous que le chemin est correct
import NosSolutions from './components/NosSolutions';
import PourquoiNous from './components/PourquoiNous';
import NotreApproche from './components/NotreApproche';
import NosCouts from './components/NosCouts';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <NosSolutions/>
                <PourquoiNous />
            </main>
            <footer className="App-footer">
                <p>Contactez-nous : info@horizonenvironnement.com | 27 22 31 27 01 Powered by Lumikode|Label Retail</p>
            </footer>
        </div>
    );
}

export default App;
