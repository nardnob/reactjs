import { useState } from 'react';
import Loading from './Loading.js';
import './Hiscores.css';

export default function Hiscores() {
    const [isLoading, setIsLoading] = useState(false);

    if (isLoading) {
        return (
            <div className="hiscores">
                <div className="hiscores-title">Hiscores</div>
                <Loading />
            </div>
        );
    } else {
        return (
            <div className="hiscores">
                <div className="hiscores-title">Hiscores</div>
                <input 
                    type="text"
                    placeholder="Enter a username"
                    className="hiscores-input"
                />
                <button 
                    className="hiscores-submit"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        );
    }

    function handleSubmit() {
        setIsLoading(true);
    }
}