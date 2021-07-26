import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carouselSlider.css'


const CarouselSlider = () => {
    return (
        <>
        <div className="parent">
        
                        <Carousel infiniteLoop autoPlay>
                                <div className="image">
                                    <img src="../pics/1.jpg" alt="image1" />
                                </div>
                                <div className="image">
                                    <img src="../pics/2.jpg" alt="image2" />
                                </div>
                                <div className="image">
                                    <img src="../pics/3.jpg" alt="image3" />
                                </div>
                                <div className="image">
                                    <img src="../pics/4.jpg" alt="image4" />
                                </div>

                        </Carousel>  
        </div>
        </>
    )
}

export default CarouselSlider
