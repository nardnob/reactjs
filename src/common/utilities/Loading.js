import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './Loading.css';

export default function Loading() {
    const [numDots, setNumDots] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            if (numDots >= 3) {
                setNumDots(1);
            } else {
                setNumDots(numDots + 1);
            }
        }, 500);

        return () => clearInterval(interval);
    }, [numDots]);

    return (
        <div>
            <Spinner animation="border" size="sm" role="status" /> Loading{getDots()}
        </div>
    );

    function getDots() {
        let dots = "";
        for (let i = 0; i < numDots; i++) {
            dots += ".";
        }
        return dots;
    }
}