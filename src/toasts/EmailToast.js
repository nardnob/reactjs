import Toast from 'react-bootstrap/Toast';
import './EmailToast.css';

export default function EmailToast({ show, onClose, children }) {
    return (
        <Toast show={show} onClose={() => onClose()} className="email-toast">
            <Toast.Header>
                <strong className="me-auto">Brandon Dixson</strong>
                <small>just now</small>
            </Toast.Header>
            <Toast.Body>{children}</Toast.Body>
        </Toast>
    );
}