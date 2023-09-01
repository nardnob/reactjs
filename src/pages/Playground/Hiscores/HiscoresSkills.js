export default function HiscoresSkills({ hiscores }) {
    return (
        <div className="hiscores-skills">
            <div>Hiscores for {hiscores.username}</div>
            <div>Attack: {hiscores.skills.attack}</div>
            <div>Strength: {hiscores.skills.strength}</div>
            <div>Defence: {hiscores.skills.defence}</div>
        </div>
    );
}