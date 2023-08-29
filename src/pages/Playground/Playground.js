import NavigationBar from '../../common/NavigationBar';
import Hiscores from './Hiscores';
import TimePast from '../../common/utilities/TimePast';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Playground() {
    const [initialTime, setInitialTime] = useState(new Date());

    return (
        <>
            <NavigationBar />
            <div className="app">
                <Hiscores />
                <h1>Playground</h1>
                <div>You first landed on this page <TimePast beginDate={initialTime} />.</div>
            </div>
        </>
    );
}