import Accordion from 'react-bootstrap/Accordion';

export default function WorkHistoryItem({ company, fromDate, toDate, eventKey, children }) {
    const toDateText = !toDate ? '' : `To ${toDate}`;

    return (
        <>
            <Accordion.Item eventKey={eventKey}>
                <Accordion.Header className="work-history-accordion-header">
                    <span className="accordion-header-company">{company}</span>
                    <span className="accordion-header-date">From {fromDate}<br/>{toDateText}</span>
                </Accordion.Header>
                <Accordion.Body>
                    {children}
                </Accordion.Body>
            </Accordion.Item>
        </>
    );
}