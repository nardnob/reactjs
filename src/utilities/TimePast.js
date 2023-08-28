import { useState, useEffect } from 'react';

export default function TimePast({ beginDate }) {
    const [secondsExisting, setSecondsExisting] = useState(Math.round((new Date().getTime() - beginDate?.getTime()) / 1000));

    useEffect(() => {
        const interval = setInterval(() => {
            if (beginDate) {
                setSecondsExisting(Math.round((new Date().getTime() - beginDate.getTime()) / 1000));
            }
        }, 500);

        return (() => {
            clearInterval(interval);
        })
    }, [beginDate]);

    if (secondsExisting) {
        return (
            <span>{secondsExisting} seconds ago</span>
        );
    } else {
        return <span></span>
    }
}