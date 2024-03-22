import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [driverData, setDriverData] = useState(null);

    useEffect(() => {
        fetch('https://api.openf1.org/v1/drivers?driver_number=1&session_key=7763')
            .then(response => response.json())
            .then(data => setDriverData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Formula 1 Driver Info</h1>
            </header>
            <div className="driver-container">
                {driverData && (
                    <div className="driver-card">
                        <img src={driverData[0].headshot_url} alt="Driver Headshot" className="driver-img" />
                        <h2>{driverData[0].full_name}</h2>
                        <p>Driver Number: {driverData[0].driver_number}</p>
                        <p>Team: {driverData[0].team_name}</p>
                        <p>Country: {driverData[0].country_code}</p>
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
