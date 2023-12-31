import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Playground from './pages/Playground/Playground';
import NavigationBar from './common/NavigationBar';
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
            </Routes>
        </>
    )
}