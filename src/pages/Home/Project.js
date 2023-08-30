import Card from 'react-bootstrap/Card';

export default function Project({ title, text, imageSrc, link }) {
    return (
        <Card style={{ width: '18rem' }} className="overview-project mt-2">
            <Card.Img variant="top" src={imageSrc} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Card.Link target="_blank" rel="noopener noreferrer" href={link}>Github Repo</Card.Link>
            </Card.Body>
        </Card>
    );
}