import React, { useEffect } from 'react';
import image_1 from '../../../../assets/Images/Gellary-1.jpg'
import image_2 from '../../../../assets/Images/Gellary-2.jpg'
import image_3 from '../../../../assets/Images/Gellary-3.jpg'
import image_4 from '../../../../assets/Images/Gellary-4.jpg'
import image_5 from '../../../../assets/Images/Gellary-5.jpg'
import image_6 from '../../../../assets/Images/Gellary-6.jpg'


const Gallery = () => {

    return (
        <section className='py-10'>
            <div className="container overflow-hidden">
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div className='py-5 text-center'>
                        <h1 className='uppercase text-3xl font-black font-rancho text-animation'>Gallery</h1>
                        <p className='mb-3'>
                            Journey of Knowledge and Fun: Enlightening Young Minds with an Extensive Array of Educational Toys, <br /> Engaging Games, and Interactive Learning Resources at the Sparkling Stars Academy.
                        </p>
                        <p className='bg-primary border-dotted border-b-4 w-40 mx-auto mb-2'></p>
                        <p className='bg-secondary h-[2px] w-24 mx-auto'></p>
                    </div>
                    <div>
                        <div className='grid h-[1500px] md:h-[900px] grid-flow-col lg:grid-rows-3 lg:grid-cols-3 md:grid-cols-2 md:grid-rows-3 grid-cols-1 grid-rows-6 gap-3 p-3 shadow-xl'>
                            <div className='border-2 shadow-lg rounded-xl overflow-hidden ' data-aos="fade-down-left">
                                <img className='h-full w-full object-cover' src={image_1} alt="" />
                            </div>
                            <div className=' border-2 shadow-lg rounded-xl overflow-hidden lg:col-span-2' data-aos="fade-down-right">
                                <img className='h-full w-full object-cover' src={image_2} alt="" />
                            </div>
                            <div className=' border-2 shadow-lg rounded-xl overflow-hidden' data-aos="fade-down-left">
                                <img className='h-full w-full object-cover' src={image_3} alt="" />
                            </div>
                            <div className=' border-2 shadow-lg rounded-xl overflow-hidden ' data-aos="fade-down-right">
                                <img className='h-full w-full object-cover' src={image_4} alt="" />
                            </div>
                            <div className=' border-2 shadow-lg rounded-xl overflow-hidden lg:col-span-2 ' data-aos="fade-down-left">
                                <img className='h-full w-full object-cover' src={image_5} alt="" />
                            </div>
                            <div className=' border-2 shadow-lg rounded-xl overflow-hidden lg:row-span-2' data-aos="fade-down-right">
                                <img className='h-full w-full object-cover' src={image_6} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;