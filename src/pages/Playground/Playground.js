import Hiscores from './Hiscores';
import Three from './Three';
import TimePast from '../../common/utilities/TimePast';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Playground() {
    const [initialTime, setInitialTime] = useState(new Date());

    return (
        <>
            <div className="app">
                <Hiscores />
                <h1>Playground</h1>
                <div className="mb-3">You first landed on this page <TimePast beginDate={initialTime} />.</div>
                <Three />
            </div>
        </>
    );
}