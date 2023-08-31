import Overview from './Overview';
import Projects from './Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

export default function Home() {
    return (
        <>
            <div className="app">
                <Overview />
                <div className="mt-4"></div>
                <Projects />
            </div>
        </>
    );
}