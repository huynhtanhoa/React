import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';
import {useState} from "react";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
  heart,
};


function AnimalShow({type}){

    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    }

    return (
        <div onClick={handleClick}>
            <img src={svgMap[type]} alt="animal"/>
            <img src={heart} alt="heart" style={ {width: 10 + 10 * clicks + 'px'} }/>
        </div>
    );
}

export default AnimalShow;