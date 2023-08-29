import Card from 'react-bootstrap/Card';

export default function Education() {
    return (
        <>
            <div className="education">
                <h2>Education</h2>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/ualr.jpg" />
                    <Card.Body>
                        <Card.Title>Major in Computer Science</Card.Title>
                        <Card.Text>
                            <div>Minor in Mathematics</div>
                            <div><a target="_blank" rel="noopener noreferrer" href="https://ualr.edu/">University of Arkansas at Little Rock</a></div>
                            <div>August 2010 to May 2014</div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}