import React from 'react';

const Gallery = () => {
    return (
        <section className='py-20'>
            <div className="container">
                <div className='py-5'>
                    <h1 className='text-center uppercase text-3xl mb-2 font-black font-rancho text-animation'>Shop By Category</h1>
                    <p className='bg-primary border-dotted border-b-4 w-40 mx-auto mb-2'></p>
                    <p className='bg-secondary h-[2px] w-24 mx-auto'></p>
                </div>
                <div>
                    <div className='grid h-[900px] grid-rows-3 grid-cols-3 grid-flow-col gap-4'>
                        <div className='bg-red-600 border-2 border-black'>1</div>
                        <div className='bg-red-600 border-2 border-black col-span-2'>2</div>
                        <div className='bg-red-600 border-2 border-black'>3</div>
                        <div className='bg-red-600 border-2 border-black '>4</div>
                        <div className='bg-red-600 border-2 border-black col-span-2 '>5</div>
                        <div className='bg-red-600 border-2 border-black row-span-2'>6</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;