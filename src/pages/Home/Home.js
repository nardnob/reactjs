import Overview from './Overview';
import Projects from './Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

export default function Home() {
    return (
        <>
            <div className="app">
                <Overview />
                <div className="home-spacer d-none d-md-block"></div>
                <Projects />
            </div>
        </>
    );
}