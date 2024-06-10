import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Playground from './pages/Playground/Playground';
import Privacy from './pages/Privacy/Privacy';
import NavigationBar from './common/NavigationBar';
import Footer from './common/Footer';
import './App.css';

export default function App() {
    return (
        <>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/playground" element={<Playground />} />
                <Route path="/privacy" element={<Privacy />} />
            </Routes>
            <Footer />
        </>
    )
}