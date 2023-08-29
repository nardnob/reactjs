import './Overview.css';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Overview() {
    return (
        <>
            <Row>
                <Col xs={12} sm={6}>
                    <p className="overview-header">I’m a full-stack software developer in Fort Smith, AR.</p>
                    <p className="overview-text">I specialize in .NET desktop and web development, but have experience with many technologies. I currently work as a contractor for a trucking company, ArcBest Technologies, where I have completed countless projects successfully, including numerous new applications from the ground up.</p>
                    <p className="overview-text">I am currently on the job market for a fully-remote position. Please review my website and contact me to discuss more.</p>
                </Col>
                <Col xs={12} sm={6}>
                    <Image src="images/code_on_screen.jpg" rounded fluid />
                </Col>
            </Row>
        </>
    );
}