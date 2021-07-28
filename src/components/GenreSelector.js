import React from 'react';

const GenreSelector = ({genres, onGenreSelected}) => {
    
    const handleSelection = (event) => {
        const selectedGenre = genres[event.target.value];
        onGenreSelected(selectedGenre);
    }

    const GenreOptions = genres.map((genre, index) => {
        return <option value={index} key={index}>{genre["name"]}</option>
    })
    
    return (
        <select defaultValue="" onChange={handleSelection}>
            {GenreOptions}
        </select>
    );
}

export default GenreSelector;