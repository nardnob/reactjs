import './Overview.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from './Project';

export default function Overview() {
    return (
        <>
            <Card>
                <Card.Body>
                    <Row>
                        <Col xs={12} sm={6}>
                            <p className="overview-header">I’m a full-stack software developer in Fort Smith, AR</p>
                            <p className="overview-text">I specialize in .NET desktop and web development, but have experience with many technologies. I currently work as a contractor for a trucking company, ArcBest Technologies, where I've completed countless projects successfully, including numerous new applications from the ground up.</p>
                            <p className="overview-text">I am on the job market for a fully-remote position. Please review my website and contact me to discuss more.</p>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Image src="images/code_on_screen.jpg" rounded fluid />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <div className="mt-4"></div>

            <Card>
                <Card.Body>
                    <h2>Personal Projects</h2>
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
        </>
    );
}