import React from 'react';
import { Row, Container, Col, Image, Card } from 'react-bootstrap';
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

                    <Row style={{ color: 'white' }}>
                        Mike Coletta and Tyler Ostby talk about the history of video games. Originally using the Ultimate History of Video Games Vol. 1 as a source.
                        They've branched off to cover different games, books and movies related to video games. 
                    </Row>
                    <Card className="mt-3 aboutCard">
                        <Row className="mt-3 aboutRow">                  
                            <Col md className="aboutCol">
                                Mike Coletta is a Seattle based comedian originally from Alaska. When not doing stand-up he loves video games, Dungeons and Dragons,
                                and annoying his cat Delilah.
                                Coletta has performed at The Bridgetown Comedy Festival, Emerald City Comicon, Treefort Fest, and Bumbershoot.
                                He's also the co-host of the HugLife Podcast.
                            </Col>
                            <Col md className="aboutCol">
                                <Image className="aboutImage" fluid='true' rounded='true' src={MikeHeadshot} alt="Mike Coletta" />
                            </Col>
                        </Row>
                    </Card>
                    <Card className="mt-3 aboutCard">
                        <Row className="mt-3 aboutRow">
                            <Col md className="aboutCol">
                                <Image fluid='true' rounded='true' src={TylerHeadshot} alt="Mike Coletta" />
                            </Col>
                            <Col md className="aboutCol">
                                Tyler Ostby is one of the greatest humans alive and a J-Bird champion.
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </div >
        )
    }
}

export default About;