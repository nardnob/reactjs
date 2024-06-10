import { useState, useRef } from 'react';
import HiscoresSkills from './HiscoresSkills';
import Loading from '../../../common/utilities/Loading.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import './Hiscores.css';

export default function Hiscores() {
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('Clive');
    const [hiscores, setHiscores] = useState(null);
    const [lookupDisabled, setLookupDisabled] = useState(false);
    const usernameRef = useRef(null);

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
            setTimeout(() => {
                usernameRef.current.focus();
            }, 0);
        }, 2000);
    }

    return (
        <div className="hiscores">
            <Card>
                <Card.Body>
                    <div className="hiscores-disclaimer">
                        <OverlayTrigger
                            delay={{ hide: 100, show: 100 }}
                            overlay={(props) => (
                                <Tooltip {...props}>
                                   This does not fetch actual data. CORS issues prevent that, but check out my Github 
                                   to see it working from a Chrome extension.
                                </Tooltip>
                            )}
                            placement="top"
                        >
                            <i className="bi bi-info-circle"></i>
                        </OverlayTrigger>
                    </div>
                    <div className="hiscores-title">Hiscores</div>
                    {isLoading && (
                        <Loading />
                    )}
                    <InputGroup className={"mb-3" + (isLoading ? " d-none" : "")}>
                        <Form.Control
                            placeholder="Username"
                            aria-label="Username"
                            className="hiscores-input"
                            onChange={handleUsernameChange}
                            onKeyDown={handleUsernameOnKeyDown}
                            value={username}
                            ref={usernameRef}
                            onFocus={e => e.target.select()}
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
                    {(!isLoading && hiscores) &&
                        <HiscoresSkills hiscores={hiscores} />
                    }
                </Card.Body>
            </Card>
        </div>
    );
}