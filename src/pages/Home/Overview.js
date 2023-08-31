import './Overview.css';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Overview() {
    return (
        <>
            <Row>
                <Col xs={12} md={6} lg={8}>
                    <Card>
                        <Card.Body>
                            <p className="overview-header">I’m a full-stack software developer in Fort Smith, AR</p>
                            <p className="overview-text-1">
                                I specialize in .NET desktop and web development, but have experience with many
                                technologies. I currently work as a contractor for a trucking company, ArcBest Technologies,
                                where I've completed countless projects successfully, including numerous new applications from the ground up.
                            </p>
                            <p className="overview-text-2">
                                I am on the job market for a fully-remote position.
                                Please review my website and contact me to discuss more.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <div className="headshot-container">
                        <Image src="images/headshot.png" roundedCircle />
                    </div>
                </Col>
            </Row>
        </>
    );
}