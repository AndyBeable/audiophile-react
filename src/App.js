import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import './style/styles.scss';
import Hero from './components/hero/Hero';
import ProductGrid from './components/productGrid/ProductGrid';
import Zx9Container from './components/zx9/Zx9Container';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <ProductGrid />
      <Zx9Container />
    </Router>
  );
}

export default App;
