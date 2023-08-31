import Hiscores from './Hiscores';
import Three from './Three';
import TimePast from '../../common/utilities/TimePast';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Playground.css';

export default function Playground() {
    const [initialTime, setInitialTime] = useState(new Date());

    return (
        <>
            <div className="app">
                <h1 className="playground-header">Playground</h1>
                <div className="mb-3">You first landed on this page <TimePast beginDate={initialTime} />.</div>
                <Three />
                <Hiscores />
            </div>
        </>
    );
}