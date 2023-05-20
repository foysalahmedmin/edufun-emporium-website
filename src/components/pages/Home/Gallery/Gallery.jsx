import React from 'react';
import image_1 from '../../../../assets/Images/Gellary-1.jpg'
import image_2 from '../../../../assets/Images/Gellary-2.jpg'
import image_3 from '../../../../assets/Images/Gellary-3.jpg'
import image_4 from '../../../../assets/Images/Gellary-4.jpg'
import image_5 from '../../../../assets/Images/Gellary-5.jpg'
import image_6 from '../../../../assets/Images/Gellary-6.jpg'

const Gallery = () => {
    return (
        <section className='py-10'>
            <div className="container">
                <div className='py-5 mb-10'>
                    <h1 className='text-center uppercase text-3xl mb-2 font-black font-rancho text-animation'>Gallery</h1>
                    <p className='bg-primary border-dotted border-b-4 w-40 mx-auto mb-2'></p>
                    <p className='bg-secondary h-[2px] w-24 mx-auto'></p>
                </div>
                <div>
                    <div className='grid h-[1500px] md:h-[900px] grid-flow-col lg:grid-rows-3 lg:grid-cols-3 md:grid-cols-2 md:grid-rows-3 grid-cols-1 grid-rows-6 gap-3 p-3 shadow-xl'>
                        <div className='border-2 shadow-lg'>
                            <img className='h-full w-full object-cover' src={image_1} alt="" />
                        </div>
                        <div className=' border-2 shadow-lg lg:col-span-2'>
                            <img className='h-full w-full object-cover' src={image_2} alt="" />
                        </div>
                        <div className=' border-2 shadow-lg'>
                            <img className='h-full w-full object-cover' src={image_3} alt="" />
                        </div>
                        <div className=' border-2 shadow-lg '>
                            <img className='h-full w-full object-cover' src={image_4} alt="" />
                        </div>
                        <div className=' border-2 shadow-lg lg:col-span-2 '>
                            <img className='h-full w-full object-cover' src={image_5} alt="" />
                        </div>
                        <div className=' border-2 shadow-lg lg:row-span-2'>
                            <img className='h-full w-full object-cover' src={image_6} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;