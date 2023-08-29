import NavigationBar from '../NavigationBar';
import Overview from '../Overview';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

export default function Home() {
    return (
        <>
            <NavigationBar />
            <Card className="app">
                <Card.Body>
                    <Overview />
                </Card.Body>
            </Card>
        </>
    );
}