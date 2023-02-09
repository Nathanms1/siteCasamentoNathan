import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Menu from './components/pages/Menu';
import Pix from './components/pages/Pix';
import Erro from './components/pages/Erro';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import './App.module.css';



function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/pix" element={<Pix />} /> 

        <Route path="*" element={ <Erro /> } />
      </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App;
