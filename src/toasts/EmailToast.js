import Toast from 'react-bootstrap/Toast';
import './EmailToast.css';

export default function EmailToast({ show, onClose}) {
    return (
        <Toast show={show} onClose={() => onClose()} className="email-toast">
            <Toast.Header>
                <strong className="me-auto">Brandon Dixson</strong>
                <small>just now</small>
            </Toast.Header>
            <Toast.Body>Thanks for the message! I will respond as soon as possible.</Toast.Body>
        </Toast>
    );
}