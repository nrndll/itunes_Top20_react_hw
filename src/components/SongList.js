import React from 'react';
import SongItem from './SongItem';

const SongList = ({songs}) => {

    const SongItems = songs.map((song, index) => {
        return <SongItem song={song} index={index+1} key={song["id"]["attributes"]["im:id"]}/>
    })    

    return (
        <>
            {SongItems}
        </>
    );
}

export default SongList;