import { useState } from 'react';
import Loading from '../../common/utilities/Loading.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Hiscores.css';

export default function Hiscores() {
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [hiscores, setHiscores] = useState(null);
    const [lookupDisabled, setLookupDisabled] = useState(true);

    function handleUsernameChange(e) {
        setUsername(e.target.value);
        setLookupDisabled(!e.target.value);
    }

    function handleUsernameOnKeyDown(e) {
        if (e.keyCode === 13) { //handle enter key
            handleSubmit();
        }
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

    return (
        <div className="hiscores">
            <Card>
                <Card.Body>
                    <div className="hiscores-title">Hiscores</div>
                    {isLoading && (
                        <Loading />
                    )}
                    {!isLoading && (
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Username"
                                aria-label="Username"
                                className="hiscores-input"
                                onChange={handleUsernameChange}
                                onKeyDown={handleUsernameOnKeyDown}
                                value={username}
                            />
                            <Button
                                variant="primary"
                                className="hiscores-submit"
                                onClick={handleSubmit}
                                disabled={lookupDisabled}
                            >
                                Lookup
                            </Button>
                        </InputGroup>
                    )}
                    {(!isLoading && hiscores) &&
                        <div className="hiscores-skills">
                            <div>Hiscores for {hiscores.username}</div>
                            <div>Attack: {hiscores.skills.attack}</div>
                            <div>Strength: {hiscores.skills.strength}</div>
                            <div>Defence: {hiscores.skills.defence}</div>
                        </div>
                    }
                </Card.Body>
            </Card>
        </div>
    );
}