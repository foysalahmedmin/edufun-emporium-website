import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { BiSearchAlt } from "react-icons/bi";
import All_Toys_Tr from './All_Toys_Tr';
import LoadSpinner from '../shared/LoadSpinner/LoadSpinner';
import useTitle from '../../../custom_hooks/useTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';

const All_Toys = () => {
    useTitle('All Toys')
    useEffect(() => {
        AOS.init()
    }, [])
    const navigation = useNavigation()
    const loadAllToys = useLoaderData()
    const [allToys, setAllToys] = useState(loadAllToys)
    const [searchText, setSearchText] = useState('')
    const searchHandler = () => {
        fetch(`https://edu-fun-emporium-server.vercel.app/toysSearch/${searchText}`)
            .then(res => res.json())
            .then(data => setAllToys(data))
    }

    if (navigation.state === 'loading') {
        return <LoadSpinner />
    }
    return (
        <section className='py-20'>
            <div className="container py-10">
                <div className='py-5 text-center'>
                    <h1 className='uppercase text-3xl font-black font-rancho text-animation'>Our Sponsors</h1>
                    <p className='mb-3'>
                        Journey of Knowledge and Fun: Enlightening Young Minds with an Extensive Array of Educational Toys, <br /> Engaging Games, and Interactive Learning Resources at the Sparkling Stars Academy.
                    </p>
                    <p className='bg-primary border-dotted border-b-4 w-40 mx-auto mb-2'></p>
                    <p className='bg-secondary h-[2px] w-24 mx-auto'></p>
                </div>
                <div>
                    <div className='max-w-xl ml-auto flex border-b-2 border-primary border-dotted rounded-lg overflow-hidden'>
                        <label htmlFor="search"></label>
                        <input onChange={(event) => setSearchText(event.target.value)} className='w-full px-5 py-1' type="text" name="search" id="search" placeholder='Search...' />
                        <button onClick={searchHandler} className='btn btn-ghost'><BiSearchAlt className='text-primary font-black text-2xl' /></button>
                    </div>
                </div>
                <div className="overflow-x-auto pt-5">
                    <table className="table w-full">
                        <thead>
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
                                allToys.map((toy, index) => <All_Toys_Tr key={toy._id} toy={toy} index={index} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default All_Toys;