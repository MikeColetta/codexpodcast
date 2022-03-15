import React from 'react';
import EpisodesContainer from '../components/EpisodesContainer';
import Sources from '../components/Sources';
import './style.css';
import { Row, Container, Col, Image } from 'react-bootstrap';


class Homepage extends React.Component {

    render() {
        return (
            <div>
                <Container className='bannerContainer'>
                    <Image className='bannerImage' fluid='true' rounded='true' src="https://ik.imagekit.io/4lalrpwz0sy/codexBanner_gDp77JT5T.png?ik-sdk-version=javascript-1.4.3&updatedAt=1647325128438" alt="Codex Podcast Banner"></Image>
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