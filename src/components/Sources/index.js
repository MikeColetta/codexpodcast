import React from "react";
import { Container, Card, Row } from 'react-bootstrap';

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
                            <Row>
                                <p>Published: </p>
                            </Row>
                            <Row>
                                <p className="card-text">This is the book description</p>
                            </Row>
                        </div>
                    </Row>
                </div>
            </Card>
        </Container>
    )
}


export default Sources;