import Image from 'react-bootstrap/Image';
import './HiscoresSkill.css';

export default function HiscoresSkill({ imageSrc, level }) {
    return (
        <>
            <Image
                className="skill-image"
                src={imageSrc}
                width={30}
                height={30}
            />
            {level}
        </>
    );
}