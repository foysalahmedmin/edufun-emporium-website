import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Review_card from './Review_Card';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://edu-fun-emporium-server.vercel.app/eduFunReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews)
    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <section className='py-10'>
            <div className="container overflow-hidden">
                <div data-aos="fade-up">
                    <div className='py-5 text-center'>
                        <h1 className='uppercase text-3xl font-black font-rancho text-animation'>Customer Reviews</h1>
                        <p className='mb-3'>
                            Journey of Knowledge and Fun: Enlightening Young Minds with an Extensive Array of Educational Toys, <br /> Engaging Games, and Interactive Learning Resources at the Sparkling Stars Academy.
                        </p>
                        <p className='bg-primary border-dotted border-b-4 w-40 mx-auto mb-2'></p>
                        <p className='bg-secondary h-[2px] w-24 mx-auto'></p>
                    </div>
                    <div>
                        <Slider {...settings}>
                            {
                                reviews.map(review => <Review_card review_data={review} key={review._id}></Review_card>)
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;