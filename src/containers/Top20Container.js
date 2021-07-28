import React, {useState, useEffect} from 'react';
import SongList from '../components/SongList';

const Top20Container = () => {

    const [songs, setSongs] = useState([])

    useEffect(() => {
        getSongs();
    }, []
    )

    const getSongs = () => {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
            .then(list => list.json())
            .then(songs => setSongs(songs["feed"]["entry"]));
    }

    return (
        <>
            <h2>I'm the Top20Container!</h2>
            <SongList songs={songs}/>
        </>
    );
}

export default Top20Container;