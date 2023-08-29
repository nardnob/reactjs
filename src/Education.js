import Card from 'react-bootstrap/Card';

export default function Education() {
    return (
        <>
            <div className="education">
                <h2>Education</h2>
                <Card style={{ width: '18rem' }} className="mt-3">
                    <Card.Img variant="top" src="images/ualr.jpg" />
                    <Card.Body>
                        <Card.Title>Major in Computer Science</Card.Title>
                        <Card.Text>
                            <span>Minor in Mathematics</span><br/>
                            <span><a target="_blank" rel="noopener noreferrer" href="https://ualr.edu/">University of Arkansas at Little Rock</a></span><br/>
                            <span>August 2010 to May 2014</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}