import Overview from './Overview';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

export default function Home() {
    return (
        <>
            <div className="app">
                <Overview />
            </div>
        </>
    );
}