import React from "react";
import { Container, Card, Row, Image } from 'react-bootstrap';
import UHVGVol1 from '../../assets/UHVGVol1.jpg'
import UHVGVol2 from '../../assets/UHVGVol2.jpg'
import MastersofDoom from '../../assets/MastersofDoom.jpg'
import ConsoleWars from '../../assets/ConsoleWars.jpg'

function Sources() {
    return (
        <Container className="episodeContainer">
            <h3 className="recentHeading mt-1">Sources</h3>
            <Card className="mt-3 episodeCard">
                <div className="card mt-2 mb-2 singleEpisode">
                    <Row>
                        <div className="card-body sourceCard">
                            <Row>
                                <a className="sourceAnchor" href="https://www.amazon.com/Console-Wars-Nintendo-Defined-Generation/dp/0062276700" target={'_blank'} rel={'noreferrer'}>
                                    <h5 className="card-title">Console Wars: Sega, Nintendo, and the Battle that Defined a Generation</h5></a>
                            </Row>
                            <Row>
                                <h6 className="card-title">by Blake J. Harris</h6>
                            </Row>
                            <Image fluid='true' rounded='true' src={ConsoleWars} alt="Tyler Ostby"></Image>
                        </div>
                    </Row>
                </div>
            </Card>
            <Card className="mt-3 episodeCard">
                <div className="card mt-2 mb-2 singleEpisode">
                    <Row>
                        <div className="card-body sourceCard">
                            <Row>
                                <a className="sourceAnchor" href="https://www.amazon.com/Masters-Doom-Created-Transformed-Culture-ebook/dp/B000FBFNL0/" target={'_blank'} rel={'noreferrer'}>
                                    <h5 className="card-title">Masters of Doom: How Two Guys Created an Empire and Transformed Pop Culture </h5></a>
                            </Row>
                            <Row>
                                <h6 className="card-title">by David Kushner</h6>
                            </Row>
                            <Image fluid='true' rounded='true' src={MastersofDoom} alt="Tyler Ostby"></Image>
                        </div>
                    </Row>
                </div>
            </Card>
            <Card className="mt-3 episodeCard">
                <div className="card mt-2 mb-2 singleEpisode">
                    <Row>
                        <div className="card-body sourceCard">
                            <Row>
                                <a className="sourceAnchor" href="https://www.amazon.com/Ultimate-History-Video-Games-Billion-Dollar/dp/1984825437/" target={'_blank'} rel={'noreferrer'}>
                                    <h5 className="card-title">The Ultimate History of Video Games, Volume 2:
                                        Nintendo, Sony, Microsoft, and the Billion-Dollar Battle to Shape Modern Gaming</h5></a>
                            </Row>
                            <Row>
                                <h6 className="card-title">by Steven L. Kent</h6>
                            </Row>
                            <Image fluid='true' rounded='true' src={UHVGVol2} alt="Tyler Ostby"></Image>
                        </div>
                    </Row>
                </div>
            </Card>
            <Card className="mt-3 episodeCard">
                <div className="card mt-2 mb-2 singleEpisode">
                    <Row>
                        <div className="card-body sourceCard">
                            <Row>
                                <a className="sourceAnchor" href="https://www.amazon.com/Ultimate-History-Video-Games-Pokemon/dp/0761536434/" target={'_blank'} rel={'noreferrer'}>
                                    <h5 className="card-title">The Ultimate History of Video Games: From Pong to Pokemon--
                                        The Story Behind the Craze That Touched Our Lives and Changed the World</h5></a>
                            </Row>
                            <Row>
                                <h6 className="card-title">by Steven L. Kent</h6>
                            </Row>
                            <Image fluid='true' rounded='true' src={UHVGVol1} alt="Tyler Ostby"></Image>
                        </div>
                    </Row>
                </div>
            </Card>
        </Container>
    )
}


export default Sources;