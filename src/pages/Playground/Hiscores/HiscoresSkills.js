import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import HiscoresSkill from './HiscoresSkill';
import './HiscoresSkills.css';

export default function HiscoresSkills({ hiscores }) {
    return (
        <div className="hiscores-skills">
            <Row>
                <Col xs={4}>
                    <HiscoresSkill
                        imageSrc="images/Hiscores/attack.png"
                        level={hiscores.skills.attack}
                    />                    
                </Col>
                <Col xs={4}>
                    <HiscoresSkill
                        imageSrc="images/Hiscores/constitution.png"
                        level={99}
                    />                         
                </Col>
                <Col xs={4}>
                    <HiscoresSkill
                        imageSrc="images/Hiscores/mining.png" 
                        level={99}
                    />     
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                    <HiscoresSkill
                        imageSrc="images/Hiscores/strength.png"
                        level={hiscores.skills.strength}
                    />                    
                </Col>
                <Col xs={4}>
                    <HiscoresSkill
                        imageSrc="images/Hiscores/agility.png"
                        level={99}
                    />                         
                </Col>
                <Col xs={4}>
                    <HiscoresSkill
                        imageSrc="images/Hiscores/smithing.png" 
                        level={99}
                    />     
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                    <HiscoresSkill
                        imageSrc="images/Hiscores/defence.png"
                        level={hiscores.skills.defence}
                    />                    
                </Col>
                <Col xs={4}>
                    <HiscoresSkill
                        imageSrc="images/Hiscores/herblore.png"
                        level={99}
                    />                         
                </Col>
                <Col xs={4}>
                    <HiscoresSkill
                        imageSrc="images/Hiscores/fishing.png" 
                        level={99}
                    />     
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                    <HiscoresSkill
                        imageSrc="images/Hiscores/ranged.png"
                        level={99}
                    />                    
                </Col>
                <Col xs={4}>
                    <HiscoresSkill
                        imageSrc="images/Hiscores/thieving.png"
                        level={99}
                    />                         
                </Col>
                <Col xs={4}>
                    <HiscoresSkill
                        imageSrc="images/Hiscores/cooking.png" 
                        level={99}
                    />     
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                    <HiscoresSkill
                        imageSrc="images/Hiscores/prayer.png"
                        level={99}
                    />                    
                </Col>
                <Col xs={4}>
                    <HiscoresSkill
                        imageSrc="images/Hiscores/crafting.png"
                        level={99}
                    />                         
                </Col>
                <Col xs={4}>
                    <HiscoresSkill
                        imageSrc="images/Hiscores/firemaking.png" 
                        level={99}
                    />     
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                    <HiscoresSkill
                        imageSrc="images/Hiscores/magic.png"
                        level={99}
                    />                    
                </Col>
                <Col xs={4}>
                    <HiscoresSkill
                        imageSrc="images/Hiscores/fletching.png"
                        level={99}
                    />                         
                </Col>
                <Col xs={4}>
                    <HiscoresSkill
                        imageSrc="images/Hiscores/woodcutting.png" 
                        level={99}
                    />     
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                    <HiscoresSkill
                        imageSrc="images/Hiscores/runecrafting.png"
                        level={99}
                    />                    
                </Col>
                <Col xs={4}>
                    <HiscoresSkill
                        imageSrc="images/Hiscores/slayer.png"
                        level={99}
                    />                         
                </Col>
                <Col xs={4}>
                    <HiscoresSkill
                        imageSrc="images/Hiscores/farming.png" 
                        level={99}
                    />     
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                    <HiscoresSkill
                        imageSrc="images/Hiscores/construction.png"
                        level={99}
                    />                    
                </Col>
                <Col xs={4}>
                    <HiscoresSkill
                        imageSrc="images/Hiscores/hunting.png"
                        level={99}
                    />                         
                </Col>
                <Col xs={4}>
                    <HiscoresSkill
                        imageSrc="images/Hiscores/summoning.png" 
                        level={99}
                    />     
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                    <HiscoresSkill
                        imageSrc="images/Hiscores/dungeoneering.png"
                        level={99}
                    />                    
                </Col>
                <Col xs={4}>
                    <HiscoresSkill
                        imageSrc="images/Hiscores/divination.png"
                        level={99}
                    />                         
                </Col>
                <Col xs={4}>
                </Col>
            </Row>
        </div>
    );
}