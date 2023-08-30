import './Overview.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Overview() {
    return (
        <>
            <Row>
                <Col xs={12} sm={6}>
                    <p className="overview-header">I’m a full-stack software developer in Fort Smith, AR</p>
                    <p className="overview-text">I specialize in .NET desktop and web development, but have experience with many technologies. I currently work as a contractor for a trucking company, ArcBest Technologies, where I have completed countless projects successfully, including numerous new applications from the ground up.</p>
                    <p className="overview-text">I am on the job market for a fully-remote position. Please review my website and contact me to discuss more.</p>
                </Col>
                <Col xs={12} sm={6}>
                    <Image src="images/code_on_screen.jpg" rounded fluid />
                </Col>
            </Row>

            <div className="mt-4"></div>

            <h2>Personal Projects</h2>
            <Card style={{ width: '18rem' }} className="overview-project mt-2">
                <Card.Img variant="top" src="images/kryptonite.png" />
                <Card.Body>
                    <Card.Title>Kryptonite Mod</Card.Title>
                    <Card.Text>
                        My personal minecraft mod. Development was in Java and Forge.
                    </Card.Text>
                    <Card.Link target="_blank" rel="noopener noreferrer" href="https://github.com/nardnob/KryptoniteMod">Github Repo</Card.Link>
                </Card.Body>
            </Card>
            
            <Card style={{ width: '18rem' }} className="overview-project mt-2">
                <Card.Img variant="top" src="images/LineCharges.png" />
                <Card.Body>
                    <Card.Title>Line Charges</Card.Title>
                    <Card.Text>
                        ASP.NET MVC Practice, required for a job interview.
                    </Card.Text>
                    <Card.Link target="_blank" rel="noopener noreferrer" href="https://github.com/nardnob/LineCharges">Github Repo</Card.Link>
                </Card.Body>
            </Card>
            
            <Card style={{ width: '18rem' }} className="overview-project mt-2">
                <Card.Img variant="top" src="images/rslookup.png" />
                <Card.Body>
                    <Card.Title>RS Lookup</Card.Title>
                    <Card.Text>
                        Chrome extension that integrates with a third-party hiscores API.
                    </Card.Text>
                    <Card.Link target="_blank" rel="noopener noreferrer" href="https://github.com/nardnob/rslookup_chrome">Github Repo</Card.Link>
                </Card.Body>
            </Card>
        </>
    );
}