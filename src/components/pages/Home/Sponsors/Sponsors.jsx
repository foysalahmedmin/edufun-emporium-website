import React from 'react';
import Marquee from "react-fast-marquee";
import sponsor_1 from '../../../../assets/Images/sponsor-1.png'
import sponsor_2 from '../../../../assets/Images/sponsor-2.png'
import sponsor_3 from '../../../../assets/Images/sponsor-3.png'
import sponsor_4 from '../../../../assets/Images/sponsor-4.png'
import sponsor_5 from '../../../../assets/Images/sponsor-5.png'
import sponsor_6 from '../../../../assets/Images/sponsor-6.png'
import sponsor_7 from '../../../../assets/Images/sponsor-7.png'
import sponsor_8 from '../../../../assets/Images/sponsor-8.png'

const Sponsors = () => {
    return (
        <section className='py-10'>
            <div className="container overflow-hidden">
                <div data-aos="fade-up">
                    <div className='py-5 text-center'>
                        <h1 className='uppercase text-3xl font-black font-rancho text-animation'>Our Sponsors</h1>
                        <p className='mb-3'>
                            Journey of Knowledge and Fun: Enlightening Young Minds with an Extensive Array of Educational Toys, <br /> Engaging Games, and Interactive Learning Resources at the Sparkling Stars Academy.
                        </p>
                        <p className='bg-primary border-dotted border-b-4 w-40 mx-auto mb-2'></p>
                        <p className='bg-secondary h-[2px] w-24 mx-auto'></p>
                    </div>
                    <div>
                        <Marquee>
                            <div className='w-60 h-60'>
                                <img className='w-full h-full object-cover' src={sponsor_1} alt="" />
                            </div>
                            <div className='w-60 h-60'>
                                <img className='w-full h-full object-cover' src={sponsor_2} alt="" />
                            </div>
                            <div className='w-60 h-60'>
                                <img className='w-full h-full object-cover' src={sponsor_3} alt="" />
                            </div>
                            <div className='w-60 h-60'>
                                <img className='w-full h-full object-cover' src={sponsor_4} alt="" />
                            </div>
                            <div className='w-60 h-60'>
                                <img className='w-full h-full object-cover' src={sponsor_5} alt="" />
                            </div>
                            <div className='w-60 h-60'>
                                <img className='w-full h-full object-cover' src={sponsor_6} alt="" />
                            </div>
                            <div className='w-60 h-60'>
                                <img className='w-full h-full object-cover' src={sponsor_7} alt="" />
                            </div>
                            <div className='w-60 h-60'>
                                <img className='w-full h-full object-cover' src={sponsor_8} alt="" />
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;