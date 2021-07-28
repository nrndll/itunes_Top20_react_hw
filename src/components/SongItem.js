import React from 'react';

const SongItem = ({song, index}) => {
    return (
        <ul>
            <li>Chart Position: {index}</li>
            <li>Song: {song["im:name"]["label"]}</li>
            <li>Artist: {song["im:artist"]["label"]}</li>
        </ul>
    );
}

export default SongItem;