import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LoadSpinner from '../shared/LoadSpinner/LoadSpinner';

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
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={picture_url} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-3xl font-bold text-primary uppercase">{name}</h1>
                            <p className="pt-5"><span className='font-rancho font-bold tracking-[2px]'>Seller:</span> <span>{seller_name}</span></p>
                            <p className="pb-5"><span>{seller_email}</span></p>
                            <p className=""><span className='font-rancho font-bold tracking-[2px]'>Price:</span> <span>${price}</span></p>
                            <p className=""><span className='font-rancho font-bold tracking-[2px]'>Stock:</span> <span>{quantity_available}</span></p>
                            <p className=""><span className='font-rancho font-bold tracking-[2px]'>Sub-Category:</span> <span>{sub_category}</span></p>
                            <p className=""><span className='font-rancho font-bold tracking-[2px]'>Rating:</span> <span>{rating}</span></p>
                            <p className='py-5'>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Toy_Details;