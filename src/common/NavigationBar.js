import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ContactModal from '../modals/ContactModal';

export default function NavigationBar() {
    const [showContactModal, setShowContactModal] = useState(false);
    const [contactModalIsSubmitted, setContactModalIsSubmitted] = useState(false);
    const [contactModalIsValidated, setContactModalIsValidated] = useState(false);

    function handleContactClick() {
        setContactModalIsSubmitted(false);
        setContactModalIsValidated(false);
        setShowContactModal(true);
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="home">Brandon Dixson</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home">Home</Nav.Link>
                            <Nav.Link href="about">About</Nav.Link>
                            <Nav.Link href="playground">Playground</Nav.Link>
                            <Nav.Link onClick={handleContactClick}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ContactModal
                show={showContactModal}
                isSubmitted={contactModalIsSubmitted}
                setIsSubmitted={setContactModalIsSubmitted}
                isValidated={contactModalIsValidated}
                setIsValidated={setContactModalIsValidated}
                onClose={() => setShowContactModal(false) } 
            />
        </>
    );
}