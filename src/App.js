import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
