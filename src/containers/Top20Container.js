import React, {useState, useEffect} from 'react';
import SongList from '../components/SongList';
import GenreSelector from '../components/GenreSelector';

const Top20Container = () => {

    const [songs, setSongs] = useState([])
    const [genres, setGenres] = useState([
        { name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json" },
        { name: "Rock", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json" },
        { name: "Dance", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json" },
        { name: "Country", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json" }
    ])
    const [genre, setGenre] = useState({ name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json" })

    useEffect(() => {
        getSongs(genre)
    }, [genre]
    )

    const getSongs = (genre) => {
        fetch(genre["url"])
            .then(res => res.json())
            .then(songs => setSongs(songs["feed"]["entry"]));
    }

    const onGenreSelected = genre => {
        setGenre(genre);
    }

    return (
        <>
            <h2>UK TOP 20 CHARTS</h2>
            <GenreSelector genres={genres} onGenreSelected={onGenreSelected}/>
            <SongList songs={songs}/>
        </>
    );
}

export default Top20Container;