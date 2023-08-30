import Badge from 'react-bootstrap/Badge';

export default function SkillBadges({ skills, variant }) {
    return (
        <>
        {skills.length === 0 && 
            <Badge bg="secondary" className="skill-badge">No skills match your search</Badge>
        }
            <div className="mb-4">
            {skills.map(skill => 
                <Badge bg={variant} className="skill-badge" key={skill.id}>{skill.name}</Badge>
            )}
            </div>
        </>
    );
}