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
                    <Row style={{ color: '#FAF3DD', justifyContent: 'center' }}>
                        *WARNING - Game not yet optimized for mobile devices.
                    </Row>
                    <Row>
                        <iframe frameborder="0" src="https://itch.io/embed-upload/7510374?color=333333" allowfullscreen="" width="960" height="570" title='codexpong'>
                            <a href="https://catamaran.itch.io/codex-pong">Play Codex Pong on itch.io</a>
                        </iframe>
                    </Row>
                    <Row style={{ color: '#FAF3DD', justifyContent: 'center' }}>
                        <br></br>
                        Controls:
                        <br></br>
                        W - Move paddle up
                        <br></br>
                        S - Move paddle down
                        <br></br>
                        Space Bar - Reset game
                        <br></br>
                        B - Ball reset (in case ball gets stuck)
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Contact;