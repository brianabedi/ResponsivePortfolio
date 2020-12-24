import React,{useState} from "react";
import "./carousel.scss";
import ImgComponent from "./imgcomponent";
import i1 from "./images/1.png";
import i2 from "./images/2.png";
import i3 from "./images/3.png";

function Carousel() {
    const [x, setX] = useState(0);
    let carouselArr =[<ImgComponent src={i1}></ImgComponent>, <ImgComponent src={i2}></ImgComponent>, <ImgComponent src={i3}></ImgComponent>];
    
    const goLeft=()=>{
        x === 0 ? setX(-100*(carouselArr.length - 1)) : setX(x+100);
    };
    const goRight=()=>{
       x === -100*(carouselArr.length-1) ? setX(0) : setX(x-100);
    };

    return (
        <div className="carousel">
            {
                carouselArr.map((item,index)=>{
                    return(
                        <div 
                        key={index} 
                        className="carouse"
                        style={{transform: 'translateX(${x}%)' }}
                        >
                            {item}
                        </div>
                    );
                })}
                <button id="goLeft" onClick={goLeft} ><i class="fas fa-chevron-left"></i></button>

                <buton id="goRight" onClick={goRight}><i class="fas fa-chevron-right"></i></buton>
        </div>
    );
}

export default Carousel;