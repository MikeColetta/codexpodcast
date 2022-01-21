import React from 'react';
import CustomCarousel from '../components/CustomCarousel';
import EpisodesContainer from '../components/EpisodesContainer';
import Sources from '../components/Sources';
import './style.css';
import { Row, Container } from 'react-bootstrap';

class Homepage extends React.Component {

    render() {
        return (
            <div>
                <CustomCarousel />
                <Container>
                    <Row className="mt-3">
                        <div className="col-8">
                            <EpisodesContainer />
                        </div>
                        <div className="col-4">
                            <Sources />
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Homepage;