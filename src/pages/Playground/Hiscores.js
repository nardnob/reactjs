import { useState } from 'react';
import Loading from '../../common/utilities/Loading.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Hiscores.css';

export default function Hiscores() {
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [hiscores, setHiscores] = useState(null);

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
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        className="hiscores-input"
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                    />
                    <Button 
                        variant="primary" 
                        className="hiscores-submit"
                        onClick={handleSubmit}>
                        Lookup
                    </Button>
                </InputGroup>
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
}