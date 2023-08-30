import Accordion from 'react-bootstrap/Accordion';
import './WorkHistory.css';

export default function WorkHistory() {
    return (
        <>
            <div className="work-history">
                <h2 class="work-history-header">Work History</h2>
                <Accordion defaultActiveKey="0" className="mt-3">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="work-history-accordion-header">
                            <span className="accordion-header-company">ArcBest Technologies</span>
                            <span className="accordion-header-date">From December 2020</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>
                                As a contractor I’m leveraged to assist multiple departments as needed. I focus primarily on VueJS web
                                development, C# services (WebAPI, WCF), WinForms applications, console applications (often
                                generating and emailing reports), and even legacy development: VB .NET, Mainframe (COBOL and JCL),
                                and classic ASP. 
                            </p>
                            <p>
                                I have completed countless projects successfully, including: migrations from Subversion
                                to Azure DevOps, conversions from legacy languages to newer technologies, new features and
                                maintenance in existing applications, and numerous new applications from the ground up.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header className="work-history-accordion-header">
                            <span className="accordion-header-company">RxResults</span>
                            <span className="accordion-header-date">From September 2019<br/>To June 2020</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            Development involved ETL via SSIS/FTP, complex .NET services, desktop and web applications,
                            scheduled Windows tasks, CI/CD with Azure DevOps, and reporting with SSRS. This versatile role
                            required constant collaboration with numerous third-parties and internal users.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header className="work-history-accordion-header">
                            <span className="accordion-header-company">Pharmacy Providers of Oklahoma</span>
                            <span className="accordion-header-date">From April 2018<br/>To April 2019</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            I participated in an agile environment where I took part in weekly sprint reviews and maintained a
                            60/40 split between new development and maintenance. In this role I primarily utilized ASP.NET MVC,
                            jQuery, VueJS, WPF, SQL Server, NuGet, ClickOnce, and TFS.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header className="work-history-accordion-header">
                            <span className="accordion-header-company">Orange5 LLC</span>
                            <span className="accordion-header-date">From September 2017<br/>To February 2018</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            I worked on a contract-to-hire role for a small nonprofit. In this role I primarily maintained and
                            developed new features for an enterprise WPF application. This was full-stack development, utilizing
                            Oracle and SQL Server on the WCF back-end. I also maintained the nonprofit’s website (powered by
                            DotNetNuke), which utilized ASP.NET modules.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header className="work-history-accordion-header">
                            <span className="accordion-header-company">ArcBest Technologies</span>
                            <span className="accordion-header-date">From June 2014<br/>To August 2017</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            My first time at ArcBest Technologies, I worked with various departments to assist with important
                            initiatives as needed. Windows development utilized Winforms and WCF services. I also learned to
                            maintain and develop new features in legacy technologies (classic ASP and COBOL). I was a key
                            developer on ArcBest’s new website (over one year of development), which utilized AngularJS.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    );
}