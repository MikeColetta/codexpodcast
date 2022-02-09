import React from 'react';
import EpisodesContainer from '../components/EpisodesContainer';
import Sources from '../components/Sources';
import './style.css';
import { Row, Container, Col, Image } from 'react-bootstrap';
import codexBanner from '../assets/codexBanner.png';


class Homepage extends React.Component {

    render() {
        return (
            <div>
                <Container className='bannerContainer'>
                    <Image className='bannerImage' fluid='true' rounded='true' src={codexBanner} alt="Codex Podcast Banner"></Image>
                </Container>
                <Container>
                    <Row className="mt-3">
                        <Col md>
                            <EpisodesContainer />
                        </Col>
                        <Col md>
                            <Sources />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Homepage;