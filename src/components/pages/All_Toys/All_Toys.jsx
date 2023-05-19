import React from 'react';
import { useLoaderData } from 'react-router-dom';
import All_Toys_Tr from './All_Toys_Tr';

const All_Toys = () => {
    const allToys = useLoaderData()
    return (
        <section className='py-20'>
            <div className="container py-10">
                <div className='py-5'>
                    <h1 className='text-center uppercase text-3xl mb-2 font-black font-rancho text-animation'>All Toys</h1>
                    <p className='bg-primary border-dotted border-b-4 w-40 mx-auto mb-2'></p>
                    <p className='bg-secondary h-[2px] w-24 mx-auto'></p>
                </div>
                <div className="overflow-x-auto pt-5">
                    <table className="table w-full">
                        <thead className='bg-none'>
                            <tr className='font-rancho text-center text-secondary border-b-2 border-primary'>
                                <th></th>
                                <th>Seller Name</th>
                                <th>Toy Name</th>
                                <th>Sub Category</th>
                                <th>Price</th>
                                <th>Stocks</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allToys.slice(0, 20).map((toy, index) => <All_Toys_Tr key={toy._id} toy={toy} index={index} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default All_Toys;