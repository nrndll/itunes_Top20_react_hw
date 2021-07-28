import React from 'react';

const SongItem = ({song}) => {
    return (
        <>
            <p>{song["im:name"]["label"]}</p>
        </>
    );
}

export default SongItem;