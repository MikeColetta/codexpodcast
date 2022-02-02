import React from "react";
import { Container, Card, Row, Image } from 'react-bootstrap';
import UHVGVol1 from '../../assets/UHVGVol1.jpg'
import UHVGVol2 from '../../assets/UHVGVol2.jpg'
import MastersofDoom from '../../assets/MastersofDoom.jpg'


function Sources() {
    return (
        <Container className="episodeContainer">
            <h3 className="recentHeading mt-1">Sources</h3>

            <Card className="episodeCard">
                <div className="card mt-2 mb-2 singleEpisode">
                    <Row>
                        <div className="card-body">
                            <Row>
                                <h5 className="card-title">The Ultimate History of Video Games</h5>
                            </Row>
                            <Row>
                                <h6 className="card-title">by Steven L. Kent</h6>
                            </Row>
                            <Image fluid='true' rounded='true' src={UHVGVol1} alt="Tyler Ostby"></Image>
                        </div>
                    </Row>
                </div>
            </Card>
            <Card className="mt-3 episodeCard">
                <div className="card mt-2 mb-2 singleEpisode">
                    <Row>
                        <div className="card-body">
                            <Row>
                                <h5 className="card-title">The Ultimate History of Video Games</h5>
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
                        <div className="card-body">
                            <Row>
                                <h5 className="card-title">Masters of Doom: How Two Guys Created an Empire and Transformed Pop Culture </h5>
                            </Row>
                            <Row>
                                <h6 className="card-title">by David Kushner</h6>
                            </Row>
                            <Image fluid='true' rounded='true' src={MastersofDoom} alt="Tyler Ostby"></Image>
                        </div>
                    </Row>
                </div>
            </Card>
        </Container>
    )
}


export default Sources;