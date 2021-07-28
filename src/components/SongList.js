import React from 'react';
import SongItem from './SongItem';

const SongList = ({songs}) => {

    const SongItems = songs.map((song) => {
        return <SongItem song={song} key={song["id"]["attributes"]["im:id"]}/>
    })    

    return (
        <>
            <h3>I'm the SongList!</h3>
            <ul>
                {SongItems}
            </ul>
        </>
    );
}

export default SongList;