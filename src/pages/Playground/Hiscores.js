import { useState } from 'react';
import Loading from '../../common/Loading.js';
import Button from 'react-bootstrap/Button';
import './Hiscores.css';

export default function Hiscores() {
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [hiscores, setHiscores] = useState(null);

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
                <div>
                    <input 
                        type="text"
                        placeholder="Enter a username"
                        className="hiscores-input"
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                    />
                    <Button 
                        className="hiscores-submit"
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </div>
                {hiscores && 
                <div className="hiscores-skills">
                    <div>Hiscores for {hiscores.username}</div>
                    <div>Attack: {hiscores.skills.attack}</div>
                    <div>Strength: {hiscores.skills.strength}</div>
                    <div>Defence: {hiscores.skills.defence}</div>
                </div>
                }
            </div>
        );
    }

    function handleSubmit() {
        setIsLoading(true);
        setTimeout(() => {
            setHiscores({
                username: username,
                skills: {
                    attack: 97,
                    strength: 99,
                    defence: 90
                }
            })
            setIsLoading(false);
        }, 3000);
    }
}