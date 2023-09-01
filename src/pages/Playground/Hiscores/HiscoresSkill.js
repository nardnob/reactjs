import Image from 'react-bootstrap/Image';

export default function HiscoresSkill({ imageSrc, level }) {
    return (
        <>
            <Image
                src={imageSrc}
                width={30}
                height={30}
            />
            {level}
        </>
    );
}