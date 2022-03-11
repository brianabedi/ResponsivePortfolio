// src/components/bootstrap-carousel.component.js
import React from "react";

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel2.css';
import img1 from './images/1.png' 
import img2 from './images/2.png' 
import nftcalendarnews from './images/nftcalendarnews.png'
import tokens from './images/tokens.png'
import img3 from './images/3.png' 

class BootstrapCarouselComponent extends React.Component {

    render() {
        return (
            <div>
                <div className='container-fluid' >
                    <div className="row">
                        <div className="col-sm-12">
                            <h3  id="carousel2" >Portfolio</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12" >
                            <Carousel>

                                <Carousel.Item>
                                <a href="https://github.com/babedi3/VoteRight">
                                    <img
                                        className="d-block w-100 h-100"
                                        src={img1}
                                        alt="First slide"
                                    />
                                    </a>
                                    <Carousel.Caption>
                                        <h3></h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                <a href="https://www.nftcalendar.news/">
                                    <img
                                        className="d-block w-100 h-100"
                                        src={nftcalendarnews}
                                        alt="Second slide"
                                    />
                                    </a>
                                    <Carousel.Caption>
                                        <h3></h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                <a href="https://tokens.co.com/">
                                    <img
                                        className="d-block w-100 h-100"
                                        src={tokens}
                                        alt="Third slide"
                                    />
                                </a>
                                    <Carousel.Caption>
                                        <h3></h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default BootstrapCarouselComponent;