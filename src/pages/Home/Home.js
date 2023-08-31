import Overview from './Overview';
import Card from 'react-bootstrap/Card';
import Project from './Project';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

export default function Home() {
    return (
        <>
            <div className="app">
                <Overview />

                <div className="mt-4"></div>

                <Card>
                    <Card.Body>
                        <h2 class="overview-header">Personal Projects</h2>
                        <Project 
                            title="Kryptonite Mod"
                            text="My personal minecraft mod. Development was in Java and Forge."
                            imageSrc="images/kryptonite.png"
                            link="https://github.com/nardnob/KryptoniteMod"
                        />

                        <Project 
                            title="Line Charges"
                            text="ASP.NET MVC Practice, required for a job interview."
                            imageSrc="images/LineCharges.png"
                            link="https://github.com/nardnob/LineCharges"
                        />

                        <Project 
                            title="RS Lookup"
                            text="Chrome extension that integrates with a third-party hiscores API."
                            imageSrc="images/rslookup.png"
                            link="https://github.com/nardnob/rslookup_chrome"
                        />

                        <Project 
                            title="React Website"
                            text="Personal website made in React. View the code for this website on Github."
                            imageSrc="images/react_website.png"
                            link="https://github.com/nardnob/reactjs"
                        />
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}