import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Project.css';

export default function Project({ title, text, imageSrc, link }) {
    return (
        <Card style={{ width: '18rem' }} className="project mt-2">
            <Card.Img variant="top" src={imageSrc} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item className="project-text-container">{text}</ListGroup.Item>
                    <ListGroup.Item className="project-link-container">
                        <Card.Link target="_blank" rel="noopener noreferrer" href={link}>Github Repo</Card.Link>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
}