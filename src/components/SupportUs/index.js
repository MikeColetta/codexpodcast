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
        </Container>
    )
}


export default SupportUs;