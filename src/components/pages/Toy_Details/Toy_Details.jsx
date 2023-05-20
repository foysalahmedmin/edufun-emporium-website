import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LoadSpinner from '../shared/LoadSpinner/LoadSpinner';
import { Rating } from '@mui/material';

const Toy_Details = () => {
    const navigation = useNavigation()
    const toyDetails = useLoaderData()
    const { name, seller_name, picture_url, price, quantity_available, rating, seller_email, sub_category, description } = toyDetails

    if (navigation.state === 'loading') {
        return <LoadSpinner />
    }
    return (
        <section className='pt-10'>
            <div className="container py-10">
                <div className='py-5'>
                    <h1 className='text-center uppercase text-3xl mb-2 font-black font-rancho text-animation'>Register</h1>
                    <p className='bg-primary border-dotted border-b-4 w-40 mx-auto mb-2'></p>
                    <p className='bg-secondary h-[2px] w-24 mx-auto'></p>
                </div>
                <div className="hero min-h-screen">
                    <div className="w-full flex gap-5 justify-around items-start lg:items-center py-5 lg:p-5 flex-col lg:flex-row-reverse">
                        <div className='w-full lg:w-1/2 flex-1'>
                            <img src={picture_url} className="w-full h-[370px] object-cover rounded-lg shadow-2xl " />
                        </div>
                        <div className='flex-1 w-full lg:w-1/2'>
                            <h1 className="text-3xl font-bold text-primary uppercase">{name}</h1>
                            <p className="text-secondary">{sub_category}</p>
                            <p className="pt-5"><span className='font-rancho font-bold text-lg text-secondary tracking-[2px]'>Seller:</span> <span>{seller_name}</span></p>
                            <p className="pb-3"><span>{seller_email}</span></p>
                            <p className=""><span className='font-rancho font-bold text-lg text-secondary tracking-[2px]'>Price:</span> <span className='capitalize text-primary font-bold text-lg'>${price}</span></p>
                            <p className=""><span className='font-rancho font-bold text-lg text-secondary tracking-[2px]'>Stock:</span> <span className='capitalize text-primary font-bold text-lg'>{quantity_available}</span></p>
                            <div className='uppercase flex items-center gap-4'>
                                <Rating
                                    style={{ maxWidth: 130 }}
                                    value={rating}
                                    readOnly
                                />
                                <span className='capitalize text-primary font-bold text-lg'>{rating}</span>
                            </div>
                            <p className='py-3'>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Toy_Details;