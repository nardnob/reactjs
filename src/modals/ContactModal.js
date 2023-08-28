import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ContactModal({ show, onClose }) {
    const handleClose = () => onClose();

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Me</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Please send me an email to contact me.</div>
                    <div>My email address is located in my resume.</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}