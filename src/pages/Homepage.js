import React from 'react';
import CustomCarousel from '../components/CustomCarousel';
// import EpisodesContainer from '../components/EpisodesContainer';
import './style.css';
import { Row, Container } from 'react-bootstrap';

class Homepage extends React.Component {

    render() {
        return (
            <div>
                <CustomCarousel/>
                <Container>
                    <Row>
                        
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Homepage;