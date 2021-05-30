import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import './style/styles.scss';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <ProductGrid />
    </Router>
  );
}

export default App;
