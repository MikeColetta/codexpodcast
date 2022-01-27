import React from 'react';
import { Row, Container, Col, Image } from 'react-bootstrap';
import MikeHeadshot from '../assets/MikeHeadshot.jpg';
import TylerHeadshot from '../assets/TylerHeadshot.jpg';



class About extends React.Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <h3 className="recentHeading mt-1">
                            About Codex: History of Video Games
                        </h3>
                    </Row>
                    <Row style={{color:'white'}}>
                        Catto munch salmono. Step on your keyboard while you're gaming and then turn in a circle ears back wide eyed and purr for no reason
                        for run off table persian cat jump eat fish meow meow, i tell my human really likes hummus so kitty run to human with blood on mouth
                        from frenzied attack on poor innocent mouse, don't i look cute?. Poop in litter box, scratch the walls see brother cat receive pets,
                        attack out of jealousy, kitty flee in terror at cucumber discovered on floor sit in box and spend six hours per day washing,
                        but still have a crusty butthole. Eat owner's food see brother cat receive pets, attack out of jealousy.
                    </Row>
                    <Row className="mt-3 aboutRow">
                        <Col></Col>
                        <Col md className="aboutCol">
                            <Image fluid='true' rounded='true' src={MikeHeadshot} alt="Mike Coletta"/>
                        </Col>
                        <Col md className="aboutCol">
                        Mike Coletta is a Seattle based comedian originally from Alaska. When not doing stand-up he loves video games, Dungeons and Dragons,
                        and annoying his cat Delilah.
                        Coletta has performed at The Bridgetown Comedy Festival, Emerald City Comicon, Treefort Fest, and Bumbershoot. 
                        He's also the co-host of the HugLife Podcast.
                        </Col>
                        <Col></Col>

                    </Row>
                    <Row className="mt-3 aboutRow">
                    <Col></Col>

                        <Col md className="aboutCol">
                            <Image fluid='true' rounded='true' src={TylerHeadshot} alt="Mike Coletta"/>
                        </Col>
                        <Col md className="aboutCol">
                         Tyler Ostby is one of the greatest humans alive and a J-Bird champion.
                        </Col>
                        <Col></Col>

                    </Row>
                </Container>
            </div>
        )
    }
}

export default About;