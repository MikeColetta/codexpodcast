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

                    <Row className="p-3" style={{ color: '#FAF3DD' }}>
                        <h5>Mike Coletta and Tyler Ostby talk about the history of video games. They started from the beginning using the Ultimate History of Video Games
                            Vol. 1 by Steven L. Kent. as a source. Since then they've branched off to cover the history of individual games, consoles, and moments in video
                            game history! Other books covered include Masters of Doom by David Kushner and The Ultimate History of Video Games Vol. 2 by Steven L. Kent.</h5>
                    </Row>
                    <Card className="mt-3 p-3 aboutCard">
                        <Row className="mt-3 aboutRow">
                            <Col md className="aboutCol">
                                <p>Mike Coletta is a Seattle based comedian originally from Alaska. When not doing stand-up he loves video games, Dungeons and Dragons,
                                    and annoying his cat Delilah.
                                    Coletta has performed at The Bridgetown Comedy Festival, Emerald City Comicon, Treefort Fest, and Bumbershoot.
                                    He's also the co-host of the HugLife Podcast.</p>
                                    <br></br>
                                    <p>Favorite games:</p>
                                    <ul>
                                        <li>Destiny 2</li>
                                        <li>Breath of the Wild</li>
                                    </ul>
                            </Col>
                            <Col md xl={4} className="aboutCol">
                                <Image className="aboutImage" fluid='true' rounded='true' src={MikeHeadshot} alt="Mike Coletta" />
                            </Col>
                        </Row>
                    </Card>
                    <Card className="mt-3 p-3 aboutCard">
                        <Row className="mt-3 aboutRow">
                            <Col md xl={4} className="aboutCol">
                                <Image fluid='true' rounded='true' src={TylerHeadshot} alt="Tyler Ostby" />
                            </Col>
                            <Col md className="aboutCol">
                                <p>Tyler Ostby is one of the greatest humans alive and a J-Bird champion.</p>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </div >
        )
    }
}

export default About;