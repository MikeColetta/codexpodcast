import React from "react";
import { Container, Card, Row, Image } from 'react-bootstrap';
import DiscordLogo from '../../assets/Discord_Logo_full.png'

function SupportUs() {
    return (
        <Container className="episodeContainer">
            <h3 className="recentHeading mt-3">Support Us</h3>
            <Card className="mt-3 episodeCard">
                <div className="card mt-2 mb-2 singleEpisode">
                    <Row>
                        <div className="card-body sourceCard">
                            <a className="sourceAnchor" href="https://discord.com/invite/k8n5TmF" target={'_blank'} rel={'noreferrer'}>
                                <Image fluid='true' rounded='true' src={DiscordLogo} alt="Discord Banner Image"></Image>
                            </a>
                        </div>
                    </Row>
                </div>
            </Card>
            <Card className="mt-3 episodeCard">
                <div className="card mt-2 mb-2 singleEpisode">
                    <Row>
                        <div className="card-body sourceCard">
                            <a className="sourceAnchor" href="https://www.instagram.com/codexhistorypodcast" target={'_blank'} rel={'noreferrer'}>
                                <h3>Follow us on Instagram!</h3>
                            </a>
                        </div>
                    </Row>
                </div>
            </Card>
            <Card className="mt-3 episodeCard">
                <div className="card mt-2 mb-2 singleEpisode">
                    <Row>
                        <div className="card-body sourceCard">
                            <a className="sourceAnchor" href="https://trello.com/b/87D58Pen/game-log" target={'_blank'} rel={'noreferrer'}>
                                <h3>Tyler's Game Log Trello Board</h3>
                            </a>
                        </div>
                    </Row>
                </div>
            </Card>
            <Card className="mt-3 episodeCard">
                <div className="card mt-2 mb-2 singleEpisode">
                    <Row>
                        <div className="card-body sourceCard">
                            <a className="sourceAnchor" href="https://trello.com/b/7e22f2jQ/game-log-aka-mikes-pile-of-shame" target={'_blank'} rel={'noreferrer'}>
                                <h3>Mike's Game Log Trello Board</h3>
                            </a>
                        </div>
                    </Row>
                </div>
            </Card>
            <Card className="mt-3 episodeCard">
                <div className="card mt-2 mb-2 singleEpisode">
                    <Row>
                        <div className="card-body sourceCard">
                            <a className="sourceAnchor" href="https://twitter.com/SneakerElph" target={'_blank'} rel={'noreferrer'}>
                                <h3>Tyler's Twitter</h3>
                            </a>
                        </div>
                    </Row>
                </div>
            </Card>
        </Container>
    )
}


export default SupportUs;