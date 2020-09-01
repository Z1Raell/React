import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarOne from '../assets/pexels-chait-goli-2475808.jpg';
import CarTwo from '../assets/pexels-erik-mclean-4674342.jpg';
import CarThree from '../assets/pexels-jae-park-3802510.jpg';

const CarouselBox = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={CarOne}
                    alt="car"
                />
                <Carousel.Caption>
                    <h3>CarOne Image</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quidem!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={CarTwo}
                    alt="car"
                />
                <Carousel.Caption>
                    <h3>CarTwo Image</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quidem!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={CarThree}
                    alt="car"
                />
                <Carousel.Caption>
                    <h3>CarThree Image</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quidem!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselBox;
