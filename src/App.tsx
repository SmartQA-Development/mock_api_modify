import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [drivers, setDrivers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.openf1.org/v1/drivers?driver_number=1&session_key=7763')
            .then(response => response.json())
            .then(data => {
                setDrivers(data);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="app">
            <header className="header">
                <h1>Your 2024 Red Bull Drivers!</h1>
            </header>
            <div className="driver-container">
                {loading ? (
                    <div className="driver-card">
                        <p className="loading-text">Pending...</p>
                    </div>
                ) : (
                    drivers.map(driver => (
                        <div key={driver.driver_number} className="driver-card">
                            <img src={driver.headshot_url} alt={driver.full_name} />
                            <div className="driver-details">
                                <h2>{driver.broadcast_name}</h2>
                                <p>Full Name: {driver.full_name}</p>
                                <p>Team: {driver.team_name}</p>
                                <p>Country: {driver.country_code}</p>
                            </div>
                        </div>
                    ))
                )}
                {/* If there's no data for the second driver, display a "Pending" card */}
                {drivers.length === 1 && (
                    <div className="driver-card">
                        <p className="loading-text">Pending...</p>
                    </div>
                )}
            </div>
            <footer className="footer">
                <p>Website developed by <a href="https://www.smartqa.nl" target="_blank" rel="noopener noreferrer">SmartQA</a></p>
            </footer>
        </div>
    );
}

export default App;
