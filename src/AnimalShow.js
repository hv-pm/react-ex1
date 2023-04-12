import { useState } from 'react';
import birdImage from './svg/bird.svg';
import catImage from './svg/cat.svg';
import cowImage from './svg/cow.svg';
import dogImage from './svg/dog.svg';
import gatorImage from './svg/gator.svg';
import horseImage from './svg/horse.svg';
import heartImage from './svg/heart.svg';
import './AnimalShow.css';

const mapSvg = {
    bird: birdImage,
    cat: catImage,
    cow: cowImage,
    dog: dogImage,
    gator: gatorImage,
    horse: horseImage
};

function AnimalShow({type}) {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    };

    return(
        <div className="animal-show" onClick={handleClick} style={{cursor: "pointer"}}>
            <img className="animal" alt="animal" src={mapSvg[type]}/>
            <img
            className="heart" 
            alt="heart" 
            src={heartImage}
            style={{width: 10 + 10 * clicks + 'px', height: 10 + 10 * clicks + 'px'}}
            />
        </div>
    );
}

export default AnimalShow;