import React, { useState, useEffect } from "react";
import './style.css';
import Episode from '../Episode';
import EpisodePagination from '../EpisodePagination';
import { Container, Card } from 'react-bootstrap';

let Parser = require('rss-parser');
let parser = new Parser();

function EpisodesContainer() {
    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [episodesPerPage] = useState(5);


    //Get episodes from RSS feed
    async function getEpisodes() {
        setLoading(true);
        const feed = await parser.parseURL('https://feeds.libsyn.com/141866/rss');
        return feed;
    }

    //Get current episodes
    const indexOfLastEpisode = currentPage * episodesPerPage;
    const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
    const currentEpisodes = episodes.slice(indexOfFirstEpisode, indexOfLastEpisode)

    useEffect(() => {
        let isMounted = true;               // note mutable flag
        getEpisodes().then(feed => {
            if (isMounted) {
                setEpisodes(feed.items.slice(0, 25));
                setLoading(false)    
            };    // add conditional check
        })
        return () => { isMounted = false }; // cleanup toggles value, if unmounted
    }, []);                               // adjust dependencies to your needs

    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container className="episodeContainer">
            <h3 className="recentHeading mt-1">Recent Episodes</h3>

            <Card className="episodeCard">
                <Episode
                    loading={loading}
                    currentEpisodes={currentEpisodes}
                />
                <EpisodePagination className="paginationStyle"
                    episodesPerPage={episodesPerPage}
                    totalEpisodes={episodes.length}
                    paginate={paginate}
                />
            </Card>
        </Container>
    )
}


export default EpisodesContainer;