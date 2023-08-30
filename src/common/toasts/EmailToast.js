import Toast from 'react-bootstrap/Toast';
import TimePast from '../utilities/TimePast';
import './EmailToast.css';

export default function EmailToast({ show, createdTime, onClose, children }) {
    return (
        <Toast show={show} onClose={() => onClose()} className="email-toast">
            <Toast.Header>
                <strong className="me-auto">Brandon Dixson</strong>
                <small><TimePast beginDate={createdTime} /></small>
            </Toast.Header>
            <Toast.Body>{children}</Toast.Body>
        </Toast>
    );
}