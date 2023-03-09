import React from 'react';
import { Row, Container } from 'react-bootstrap';


class Contact extends React.Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <h3 className="recentHeading mt-1">
                            Codex Pong - First to 3 points wins!
                        </h3>
                    </Row>
                    <Row>
                        <iframe frameborder="0" src="https://itch.io/embed-upload/7479314?color=333333" allowfullscreen="true" width="640" height="380">
                            <a href="https://catamaran.itch.io/codex-pong">Play Codex Pong on itch.io</a>
                        </iframe>
                    </Row>
                    <Row style={{ color: '#FAF3DD', justifyContent: 'center' }}>
                        <br></br>
                        Controls:
                        <br></br>
                        Up/Down Arrows - Move paddle up and down
                        <br></br>
                        Space Bar - Reset game
                        <br></br>
                        B - Ball reset (in case you get stuck)
                        <br></br>
                        <br></br>
                        *WARNING - Game not yet optimized for mobile devices.
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Contact;