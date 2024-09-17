import React from 'react';
import Slider from 'react-slick';
import './style.css';
import { Container } from '@mui/material';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="Carousel">
            <div className="container">
                {/* Heading section */}
                <div className="Carousel-heading">
                    <h2 className="h2">
                        <span>Talented people </span>are at the<br />centre of everything we do.
                    </h2>
                </div>
                {/* Slick slider section */}
                <Container>
                <Slider {...settings}>
                    {/* 1 */}
                    <div>
                        <p>We’ve been collaborating with Morgan McKinley since summer 2018, when we needed to onboard a significant amount of contingent workforce in one week. They have proved a reliable partner for managing, administering and paying their staff working on our site, ensuring care of their motivation as well.</p>
                        <h3><b>Maria Chiara Invidia</b></h3>
                        <p>HR Business Partner | Mylan Respiratory</p>
                    </div>
                    {/* 2 */}
                    <div>
                        <p>We’ve been collaborating with Morgan McKinley since summer 2018, when we needed to onboard a significant amount of contingent workforce in one week. They have proved a reliable partner for managing, administering and paying their staff working on our site, ensuring care of their motivation as well.</p>
                        <h3><b>Maria Chiara Invidia</b></h3>
                        <p>HR Business Partner | Mylan Respiratory</p>
                    </div>
                    {/* 3 */}
                    <div>
                        <p>We’ve been collaborating with Morgan McKinley since summer 2018, when we needed to onboard a significant amount of contingent workforce in one week. They have proved a reliable partner for managing, administering and paying their staff working on our site, ensuring care of their motivation as well.</p>
                        <h3><b>Maria Chiara Invidia</b></h3>
                        <p>HR Business Partner | Mylan Respiratory</p>
                    </div>
                    {/* 4 */}
                    <div>
                        <p>We’ve been collaborating with Morgan McKinley since summer 2018, when we needed to onboard a significant amount of contingent workforce in one week. They have proved a reliable partner for managing, administering and paying their staff working on our site, ensuring care of their motivation as well.</p>
                        <h3><b>Maria Chiara Invidia</b></h3>
                        <p>HR Business Partner | Mylan Respiratory</p>
                    </div>
                    {/* 5 */}
                    <div>
                        <p>We’ve been collaborating with Morgan McKinley since summer 2018, when we needed to onboard a significant amount of contingent workforce in one week. They have proved a reliable partner for managing, administering and paying their staff working on our site, ensuring care of their motivation as well.</p>
                        <h3><b>Maria Chiara Invidia</b></h3>
                        <p>HR Business Partner | Mylan Respiratory</p>
                    </div>
                    {/* Add more slides as needed */}
                </Slider>
                </Container>
            </div>
        </div>
    );
}

export default Carousel;
