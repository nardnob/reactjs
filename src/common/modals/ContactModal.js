import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Loading from '../../common/Loading';
import EmailToast from '../toasts/EmailToast';
import { useState } from 'react';
import './ContactModal.css';

export default function ContactModal({ show, isSubmitted, setIsSubmitted, isValidated, setIsValidated, onClose }) {
    const [isLoading, setIsLoading] = useState(false);
    const [showEmailToast, setShowEmailToast] = useState(false);
    const [emailToastCreatedTime, setEmailToastCreatedTime] = useState(new Date());

    const handleClose = () => onClose();

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
        } else {
            setIsLoading(true);
            setTimeout(() => {
                handleClose();
                setIsLoading(false);
                setIsSubmitted(true);
                setEmailToastCreatedTime(new Date());
                setShowEmailToast(true);
            }, 2500);
        }

        setIsValidated(true);
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Form noValidate validated={isValidated} onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Contact Me</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                        {(isLoading || isSubmitted) && 
                            <Loading />
                        }
                        {!(isLoading || isSubmitted) &&
                            <>
                                <Form.Group className="mb-3" controlId="contactForm.email">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Enter your email address" 
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid email address.
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="contactForm.message">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control 
                                        as="textarea" 
                                        rows={3} 
                                        placeholder="Enter your message"
                                        required
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid message.
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </>
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose} disabled={isLoading || isSubmitted}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit" disabled={isLoading || isSubmitted}>
                            Send
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
            <EmailToast 
                show={showEmailToast}
                createdTime={emailToastCreatedTime}
                onClose={() => setShowEmailToast(false) }
            >
                Thanks for the message! I will respond as soon as possible.
            </EmailToast>
        </>
    );
}