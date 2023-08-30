import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Loading from '../utilities/Loading';
import EmailToast from '../toasts/EmailToast';
import { useState } from 'react';
import './ContactModal.css';

export default function ContactModal({ show, isSubmitted, setIsSubmitted, isValidated, setIsValidated, failedToSend, setFailedToSend, onClose }) {
    const [isLoading, setIsLoading] = useState(false);
    const [showEmailToast, setShowEmailToast] = useState(false);
    const [emailToastCreatedTime, setEmailToastCreatedTime] = useState(new Date());
    const [formData, setFormData] = useState({ emailAddress: '', message: '' });

    function postContactForm() {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post('https://formsubmit.co/ajax/74eb2c9f8276e89b9985070dcd660363', {
            name: "FormSubmit",
            message: JSON.stringify(formData)
        })
        .then(response => {
            handleClose();
            setIsLoading(false);
            setIsSubmitted(true);
            setEmailToastCreatedTime(new Date());
            setShowEmailToast(true);
            setFormData({ emailAddress: '', message: '' });
        })
        .catch(error => {
            setIsLoading(false);
            setFailedToSend(true);
        });
    }

    const handleClose = () => onClose();

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const form = e.currentTarget;
        if (form.checkValidity()) {
            setIsLoading(true);
            postContactForm();
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
                        {failedToSend &&
                            <>
                                <Alert key="danger" variant="danger" dismissible onClose={() => setFailedToSend(false)}>
                                    Failed to send. Please try again, or email me directly.
                                </Alert>
                            </>
                        }
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
                                        value={formData.emailAddress}
                                        onChange={(e) => setFormData({ emailAddress: e.target.value, message: formData.message })}
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
                                        value={formData.message}
                                        onChange={(e) => setFormData({ emailAddress: formData.emailAddress, message: e.target.value })}
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
                onClose={() => setShowEmailToast(false)}
            >
                Thanks for the message! I will respond as soon as possible.
            </EmailToast>
        </>
    );
}