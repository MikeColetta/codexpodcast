import React from 'react';
import { Row } from 'react-bootstrap';
import './style.css';

const Episode = ({ currentEpisodes, loading }) => {
    if (loading) {
        return <h1>Loading...</h1>
    }

    function formatDate(time) {
        let date = new Date(time);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dt = date.getDate();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }

        return(month + '-' + dt + '-' + year);
    }

    return (
        <div>
            {currentEpisodes.map((result, index) => (
                <div className="card mt-2 mb-2 singleEpisode" key={index}>
                    <Row>
                        <div className="card-body">
                            <Row>
                                <h5 className="card-title">{result.title}</h5>
                            </Row>
                            <Row>
                                <p>{formatDate(result.isoDate)}</p>
                            </Row>
                            <div>
                                <audio className="customPlayer" controls="controls">
                                    <source src={result.enclosure.url} />
                                </audio>
                            </div>
                            <Row>
                                <p className="card-text">{result.contentSnippet}</p>
                            </Row>
                        </div>
                    </Row>
                </div>
            ))
            }
        </div>
    )
}

export default Episode;