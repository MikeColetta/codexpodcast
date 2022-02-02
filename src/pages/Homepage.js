import React from 'react';
import CustomCarousel from '../components/CustomCarousel';
import EpisodesContainer from '../components/EpisodesContainer';
import Sources from '../components/Sources';
import './style.css';
import { Row, Container, Col } from 'react-bootstrap';

class Homepage extends React.Component {

    render() {
        return (
            <div>
                <CustomCarousel />
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