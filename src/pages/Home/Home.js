import Overview from './Overview';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Project from './Project';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

export default function Home() {
    return (
        <>
            <div className="app">
                <Overview />

                <div className="mt-4"></div>

                <Card className="projects">
                    <Card.Body>
                        <h2 class="projects-header">Personal Projects</h2>

                        <Row>
                            <Col xs={12} sm={6} md={4} lg={3}>
                                <Project
                                    title="Kryptonite Mod"
                                    text="My personal minecraft mod. Development was in Java and Forge."
                                    imageSrc="images/kryptonite.png"
                                    link="https://github.com/nardnob/KryptoniteMod"
                                />
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={3}>
                                <Project
                                    title="Line Charges"
                                    text="ASP.NET MVC Practice, required for a job interview."
                                    imageSrc="images/LineCharges.png"
                                    link="https://github.com/nardnob/LineCharges"
                                />
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={3}>
                                <Project
                                    title="RS Lookup"
                                    text="Chrome extension that integrates with a third-party hiscores API."
                                    imageSrc="images/rslookup.png"
                                    link="https://github.com/nardnob/rslookup_chrome"
                                />
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={3}>
                                <Project
                                    title="React Website"
                                    text="Personal website made in React. View the code for this website on Github."
                                    imageSrc="images/react_website.png"
                                    link="https://github.com/nardnob/reactjs"
                                />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}