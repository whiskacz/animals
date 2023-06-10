import './AnimalShow.css'
import { useState } from 'react';
import horse from './svg/horse.svg';
import cow from './svg/cow.svg';
import cat from './svg/cat.svg';
import dog from './svg/dog.svg';
import heart from './svg/heart.svg';

const svgMap = {
    horse,
    cat,
    dog,
    cow,
};


export function AnimalShow({ type }){
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    }

    return <div onClick={handleClick}>
        <img src={svgMap[type]} alt="animal" />
        <img 
        src={heart} 
        alt="heart"
        style={{width: 10 + 10 * clicks + 'px'}} />
    </div>
};