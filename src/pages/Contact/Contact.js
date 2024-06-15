import './Contact.css';
import Card from 'react-bootstrap/Card';

export default function Contact() {
    return (
        <>
            <div className="app">
                <Card className="contact-card">
                    <Card.Body>
                        <h1 className="contact-header">How to Contact Me</h1>
                        <div>
                            To contact me, click "Contact" in the header.
                        </div>
                        <div className="mt-2">
                            Please review the <a href="/privacy">privacy policy</a> before utilizing the Contact form.
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}
