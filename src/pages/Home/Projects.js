import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Project from './Project';
import './Projects.css';

export default function Projects() {
    return (
        <Card className="projects">
            <Card.Body>
                <h2 className="projects-header">Personal Projects</h2>

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
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <Project
                            title="ASP.NET Core Practice"
                            text="Practice website made in ASP.NET Core utilizing Blazor."
                            imageSrc="images/aspnetcore.png"
                            link="https://github.com/nardnob/aspnetcore"
                        />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}