import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import SkillBadges from './SkillBadges';
import './Skills.css';

export default function Skills() {
    const [searchText, setSearchText] = useState('');

    const desktopDevelopmentFiltered = 
        searchText === '' 
            ? desktopDevelopment 
            : desktopDevelopment.filter(skill => skill.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);

    const webDevelopmentFiltered = 
        searchText === '' 
            ? webDevelopment 
            : webDevelopment.filter(skill => skill.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);

    const developerToolsFiltered = 
        searchText === '' 
            ? developerTools 
            : developerTools.filter(skill => skill.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);

    return (
        <>
            <Card className="mt-3">
                <Card.Body className="skills-card-body">
                    <Form className="mb-3" onSubmit={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}>
                        <Form.Group controlId="form.ControlInput1">
                            <Form.Control 
                                type="text" 
                                placeholder="Search skills"
                                className="search-skills"
                                onChange={e => setSearchText(e.target.value)} 
                            />
                        </Form.Group>
                    </Form>

                    <h2 className="skills-header">Desktop Development</h2>
                    <SkillBadges
                        skills={desktopDevelopmentFiltered}
                        variant="primary"
                    />

                    <h2 className="skills-header">Web Development</h2>
                    <SkillBadges
                        skills={webDevelopmentFiltered}
                        variant="success"
                    />

                    <h2 className="skills-header">Developer Tools</h2>
                    <SkillBadges
                        skills={developerToolsFiltered}
                        variant="danger"
                    />
                </Card.Body>
            </Card>
        </>
    );
}

const desktopDevelopment = [
    { id: 0, name: "C#" },
    { id: 1, name: "VB (Visual Basic)" },
    { id: 2, name: "WPF" },
    { id: 3, name: "Winforms" },
    { id: 4, name: "SQL" },
    { id: 5, name: "SQL Server" },
    { id: 6, name: "Oracle (SQL)" },
    { id: 7, name: "IBM DB2 (SQL)" },
    { id: 8, name: "Stored Procedures" },
    { id: 9, name: "ORMs" },
    { id: 10, name: "NPoco" },
    { id: 11, name: "LINQ To SQL" },
    { id: 12, name: "SSRS (reporting)" },
    { id: 13, name: "SSIS (ETL, FTP)" },
    { id: 14, name: "Microsoft IIS" },
    { id: 15, name: "Telerik Controls" },
    { id: 16, name: "Infragistics Controls" },
    { id: 17, name: "Mainframe COBOL" },
    { id: 18, name: "Maineframe JCL" },
    { id: 19, name: "LINQ" },
    { id: 20, name: "regex" },
    { id: 21, name: "OOP Concepts" },
    { id: 22, name: ".NET Framework 4.8" }
];

const webDevelopment = [
    { id: 0, name: "React" },
    { id: 1, name: "VueJS 2.x" },
    { id: 2, name: "AngularJS 1.x" },
    { id: 3, name: ".NET WebAPI" },
    { id: 4, name: "Bootstrap" },
    { id: 5, name: "ASP.NET MVC" },
    { id: 6, name: "Javascript" },
    { id: 7, name: "jQuery" },
    { id: 8, name: "HTML" },
    { id: 9, name: "CSS" },
    { id: 10, name: "DOM Manipulation" },
    { id: 11, name: "Ajax" },
    { id: 12, name: "Swagger" },
    { id: 13, name: "react-bootstrap" },
    { id: 14, name: "bootstrap-vue" },
    { id: 15, name: "Classic ASP (VBScript)" }
];

const developerTools = [
    { id: 0, name: "Visual Studio" },
    { id: 1, name: "VS Code" },
    { id: 2, name: "Azure DevOps" },
    { id: 3, name: "Git" },
    { id: 4, name: "Swagger" },
    { id: 5, name: "Subversion" },
    { id: 6, name: "VMWare" },
    { id: 7, name: "Resharper" },
    { id: 8, name: "Fiddler" },
    { id: 9, name: "Postman" },
    { id: 10, name: "Microsoft Teams" },
    { id: 11, name: "Microsoft Office" }
];