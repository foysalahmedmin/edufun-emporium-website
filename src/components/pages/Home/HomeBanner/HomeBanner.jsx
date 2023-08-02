import React from 'react';
import image_1 from '../../../../assets/Images/homeBanner-1.jpg'
import image_2 from '../../../../assets/Images/homeBanner-2.jpg'
import image_3 from '../../../../assets/Images/homeBanner-3.jpg'
import image_4 from '../../../../assets/Images/homeBanner-4.jpg'

const HomeBanner = () => {
    const bannerPosition = {
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    const banner_1 = {
        backgroundImage: `linear-gradient(to bottom, rgb(255 255 255 / 65%), rgb(0 0 0 / 65%)), url(${image_1})`
    }
    const banner_2 = {
        backgroundImage: `linear-gradient(to bottom, rgb(255 255 255 / 65%), rgb(0 0 0 / 65%)), url(${image_2})`
    }
    const banner_3 = {
        backgroundImage: `linear-gradient(to bottom, rgb(255 255 255 / 65%), rgb(0 0 0 / 65%)), url(${image_3})`
    }
    const banner_4 = {
        backgroundImage: `linear-gradient(to bottom, rgb(255 255 255 / 65%), rgb(0 0 0 / 65%)), url(${image_4})`
    }
    return (
        <section className='min-h-screen'>

            <div className="carousel w-full">
                <div style={{ ...bannerPosition, ...banner_1 }} id="slide1" className="carousel-item relative w-full h-screen">
                    <div className="container overflow-hidden relative">
                        <div className='h-full flex justify-start items-center' data-aos="zoom-out-left">
                            <div className='max-w-lg text-white'>
                                <h1 className='text-4xl text-animation font-black mb-5'>Unlock the Power of Learning with Educational Toys</h1>
                                <p>Discover a World of Fun and Knowledge for Kids of All Ages.</p>
                                <p>Ignite a Lifelong Love for Learning!
                                    Unleash the Power of Play with Educational Toys.
                                    From Problem Solving to Critical Thinking, Watch Skills Flourish.
                                    Give the Gift of Education and Create Bright Futures.
                                    Explore our Extensive Selection and Make Learning Fun!
                                </p>
                                <button className='btn btn-primary font-rancho text-white my-5'>Get Start</button>
                            </div>
                        </div>
                        <div className="absolute left-0 right-0 flex gap-10 justify-center transform -translate-y-1/2 bottom-5">
                            <a href="#slide4" className="btn text-secondary bg-primary border-none btn-circle">❮</a>
                            <a href="#slide2" className="btn text-secondary bg-primary border-none btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div style={{ ...bannerPosition, ...banner_2 }} id="slide2" className="carousel-item relative w-full">
                    <div className="container relative">
                        <div className='h-full flex justify-start items-center'>
                            <div className='max-w-lg text-white'>
                                <h1 className='text-4xl text-animation font-black mb-5'>Ignite Curiosity and Fuel Imagination!</h1>
                                <p>Explore our Exciting Range of Educational Toys.
                                    Nurture Skills, Spark Creativity, and Foster Lifelong Learning.
                                    Shop Now for Endless Hours of Engaging Play and Growth.</p>
                                <button className='btn btn-primary font-rancho text-white my-5'>Get Start</button>
                            </div>
                        </div>

                        <div className="absolute left-0 right-0 flex gap-10 justify-center transform -translate-y-1/2 bottom-5">
                            <a href="#slide1" className="btn text-secondary bg-primary border-none btn-circle">❮</a>
                            <a href="#slide3" className="btn text-secondary bg-primary border-none btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div style={{ ...bannerPosition, ...banner_3 }} id="slide3" className="carousel-item relative w-full">
                    <div className="container relative">
                        <div className='h-full flex justify-start items-center'>
                            <div className='max-w-lg text-white'>
                                <h1 className='text-4xl text-animation font-black mb-5'>Elevate Learning through Play!</h1>
                                <p>Unlock Boundless Potential with our Educational Toys.
                                    Empower Children to Learn, Explore, and Succeed.
                                    Experience the Joy of Education and Fun, Hand in Hand.
                                    Browse our Collection and Ignite a Passion for Knowledge Today!</p>
                                <button className='btn btn-primary font-rancho text-white my-5'>Get Start</button>
                            </div>
                        </div>

                        <div className="absolute left-0 right-0 flex gap-10 justify-center transform -translate-y-1/2 bottom-5">
                            <a href="#slide2" className="btn text-secondary bg-primary border-none btn-circle">❮</a>
                            <a href="#slide4" className="btn text-secondary bg-primary border-none btn-circle">❯</a>
                        </div>
                    </div>
                </div>
                <div style={{ ...bannerPosition, ...banner_4 }} id="slide4" className="carousel-item relative w-full">
                    <div className="container relative">
                        <div className='h-full flex justify-start items-center'>
                            <div className='max-w-lg text-white'>
                                <h1 className='text-4xl text-animation font-black mb-5'>Unlock Boundless Potential with Educational Toys!</h1>
                                <p>Transform Playtime into a Journey of Discovery and Development.
                                    From STEM to Arts, We Have Toys That Educate and Entertain.
                                    Ignite Young Minds and Watch Them Thrive!
                                    Browse Our Collection and Ignite the Joy of Learning Today.</p>
                                <button className='btn btn-primary font-rancho text-white my-5'>Get Start</button>
                            </div>
                        </div>

                        <div className="absolute left-0 right-0 flex gap-10 justify-center transform -translate-y-1/2 bottom-5">
                            <a href="#slide3" className="btn text-secondary bg-primary border-none btn-circle">❮</a>
                            <a href="#slide1" className="btn text-secondary bg-primary border-none btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HomeBanner;