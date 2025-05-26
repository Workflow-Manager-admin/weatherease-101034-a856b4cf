import React from 'react';
import './App.css';
import WeatherEaseMain from './WeatherEaseMain';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol" style={{ color: '#2196F3' }}>☀️</span> WeatherEase
            </div>
            {/* Optional: Add brand/beta/status button if needed */}
          </div>
        </div>
      </nav>

      <main>
        <WeatherEaseMain />
      </main>
    </div>
  );
}

export default App;