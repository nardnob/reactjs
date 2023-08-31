import Accordion from 'react-bootstrap/Accordion';
import WorkHistoryItem from './WorkHistoryItem';
import './WorkHistory.css';

export default function WorkHistory() {
    return (
        <>
            <div className="work-history">
                <h2 class="work-history-header">Work History</h2>
                <Accordion defaultActiveKey="0" className="mt-3">
                    <WorkHistoryItem 
                        company="ArcBest Technologies"
                        fromDate="December 2020"
                        eventKey="0"
                    >
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
                    </WorkHistoryItem>

                    <WorkHistoryItem 
                        company="RxResults"
                        fromDate="September 2019"
                        toDate="June 2020"
                        eventKey="1"
                    >
                        Development involved ETL via SSIS/FTP, complex .NET services, desktop and web applications,
                        scheduled Windows tasks, CI/CD with Azure DevOps, and reporting with SSRS. This versatile role
                        required constant collaboration with numerous third-parties and internal users.
                    </WorkHistoryItem>

                    <WorkHistoryItem 
                        company="Pharmacy Providers of Oklahoma"
                        fromDate="April 2018"
                        toDate="April 2019"
                        eventKey="2"
                    >
                        I participated in an agile environment where I took part in weekly sprint reviews and maintained a
                        60/40 split between new development and maintenance. In this role I primarily utilized ASP.NET MVC,
                        jQuery, VueJS, WPF, SQL Server, NuGet, ClickOnce, and TFS.
                    </WorkHistoryItem>

                    <WorkHistoryItem 
                        company="Orange5 LLC"
                        fromDate="September 2017"
                        toDate="February 2018"
                        eventKey="3"
                    >
                        I worked on a contract-to-hire role for a small nonprofit. In this role I primarily maintained and
                        developed new features for an enterprise WPF application. This was full-stack development, utilizing
                        Oracle and SQL Server on the WCF back-end. I also maintained the nonprofit’s website (powered by
                        DotNetNuke), which utilized ASP.NET modules.
                    </WorkHistoryItem>
                    
                    <WorkHistoryItem 
                        company="ArcBest Technologies"
                        fromDate="June 2014"
                        toDate="August 2017"
                        eventKey="4"
                    >
                        My first time at ArcBest Technologies, I worked with various departments to assist with important
                        initiatives as needed. Windows development utilized Winforms and WCF services. I also learned to
                        maintain and develop new features in legacy technologies (classic ASP and COBOL). I was a key
                        developer on ArcBest’s new website (over one year of development), which utilized AngularJS.
                    </WorkHistoryItem>
                </Accordion>
            </div>
        </>
    );
}