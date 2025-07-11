import InterestForm from './components/InterestForm';
import ParticlesBackground from './components/ParticlesBackground';
import spidrLogo from './assets/spidr-logo.png';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <ParticlesBackground />
      <div className="left-section">
        <InterestForm />
      </div>
      <div className="right-section">
        <img src={spidrLogo} alt="Spidr Logo" className="right-logo" />
      </div>
    </div>
  );
}

export default App;
