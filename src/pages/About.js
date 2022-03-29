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
                            Vol. 1 by Steven L. Kent. as a source. Since then, they've branched off to cover the history of individual games, consoles, and moments in video
                            game history! Other books covered so far include Masters of Doom by David Kushner and The Ultimate History of Video Games Vol. 2 by Steven L. Kent.</h5>
                    </Row>
                    <Card className="mt-3 p-3 aboutCard">
                        <Card className="mt-2 mb-2 pb-2 singleEpisode">
                        <Row className="mt-3 aboutRow">
                            <Col md className="aboutCol">
                                <p>Mike Coletta is a Seattle based comedian originally from Alaska. When not doing stand-up he loves video games, Dungeons and Dragons,
                                    and annoying his cat Delilah.
                                    Coletta has performed at The Bridgetown Comedy Festival, Emerald City Comicon, Treefort Fest, and Bumbershoot.
                                    He's also the co-host of the HugLife Podcast. You can find Mike on Twitter <a className='aboutAnchor' href='https://twitter.com/MeColetta' target='_blank' rel='noreferrer'>@MeColetta</a> and on his <a className='aboutAnchor' href='https://colettacomedy.com' target='_blank' rel='noreferrer'>website.</a></p>
                                <br></br>
                                <p>Favorite games:</p>
                                <ul>
                                    <li>Link's Awakening</li>
                                    <li>Breath of the Wild</li>
                                    <li>Doom (2016)</li>
                                    <li>Super Mario World</li>
                                    <li>Perfect Dark</li>
                                    <li>Tony Hawk's Pro Skater</li>
                                    <li>Bioshock</li>
                                    <li>Pokemon Red</li>
                                    <li>Destiny 2</li>
                                </ul>
                            </Col>
                            <Col md xl={4} className="aboutCol">
                                <Image className="aboutImage" fluid='true' rounded='true' src={MikeHeadshot} alt="Mike Coletta" />
                            </Col>
                        </Row>
                        </Card>
                    </Card>
                    <Card className="mt-3 p-3 aboutCard">
                    <Card className="mt-2 mb-2 pb-2 singleEpisode">
                        <Row className="mt-3 aboutRow">
                            <Col md xl={4} className="aboutCol">
                                <Image fluid='true' rounded='true' src={TylerHeadshot} alt="Tyler Ostby" />
                            </Col>
                            <Col md className="aboutCol">
                                <p>Growing up, Tyler always loved games. From his Super Nintendo all the way to the latest high-end PC games, 
                                    he's played it all. Originally from Kennewick, WA (the dry, desert-y part of Washington), he now lives in Los Angeles
                                     and works in the video game industry as a communications person. You can find him on Twitter <a className='aboutAnchor' href='https://twitter.com/SneakerElph' target='_blank' rel='noreferrer'>@SneakerElph</a> and occasionally
                                      on <a className='aboutAnchor' href='https://www.youtube.com/tylerostby' target='_blank' rel='noreferrer'>YouTube</a></p>
                                <br></br>
                                <p>Favorite games:</p>
                                <ul>
                                    <li>J-Bird (Obviously)</li>
                                    <li>Banjo Kazooie</li>
                                    <li>Metal Gear Solid</li>
                                    <li>Final Fantasy</li>
                                    <li>Tony Hawk's Pro Skater 2</li>
                                </ul>
                            </Col>
                        </Row>
                        </Card>
                    </Card>
                </Container>
            </div >
        )
    }
}

export default About;