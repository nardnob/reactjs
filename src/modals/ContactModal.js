import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Loading from '../Loading';
import EmailToast from '../toasts/EmailToast';
import { useState } from 'react';
import './ContactModal.css';

export default function ContactModal({ show, onClose }) {
    const [isLoading, setIsLoading] = useState(false);
    const [showEmailToast, setShowEmailToast] = useState(false);

    const handleClose = () => onClose();

    function handleSend() {
        setIsLoading(true);
        setTimeout(() => {
            handleClose();
            setIsLoading(false);
            setShowEmailToast(true);
        }, 2500);
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Me</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                    {isLoading && 
                        <Loading />
                    }
                    {!isLoading &&
                        <Form>
                            <Form.Group className="mb-3" controlId="contactForm.email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="Enter your email address" 
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="contactForm.message">
                                <Form.Label>Message</Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    rows={3} 
                                    placeholder="Enter your message"
                                />
                            </Form.Group>
                        </Form>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSend}>
                        Send
                    </Button>
                </Modal.Footer>
            </Modal>
            <EmailToast 
                show={showEmailToast}
                onClose={() => setShowEmailToast(false) }
            >
                Thanks for the message! I will respond as soon as possible.
            </EmailToast>
        </>
    );
}