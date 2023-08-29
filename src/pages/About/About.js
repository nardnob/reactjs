import Education from '../../Education';
import NavigationBar from '../../NavigationBar';
import Skills from '../../Skills';
import WorkHistory from '../../WorkHistory';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

export default function About() {
    return (
        <>
            <NavigationBar />
            <div className="app">
                <Row>
                    <Col xs={12} sm={10} md={8} lg={6}>
                        <WorkHistory />
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className="d-block d-lg-none mt-4"></div>
                        <Education />
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col xs={12} sm={10} md={8}>
                        <Skills />
                    </Col>
                </Row>
            </div>
        </>
    );
}