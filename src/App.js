import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import './style/styles.scss';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ZX9Speaker from './components/ZX9Speaker';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <ProductGrid />
      <ZX9Speaker />
    </Router>
  );
}

export default App;
