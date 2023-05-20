import React, { useEffect, useState } from 'react';
import ShopCard from './ShopCard/ShopCard';
import { Button } from '@mui/material';
const Shop = () => {
    const [toys, seToys] = useState([])
    const [category, setCategory] = useState('Math Toys')
    const [More_LessBtn, setMore_LessBtn] = useState(false);
    const [More_or_Less, setMore_or_Less] = useState(true);
    
    useEffect(() => {
        fetch(`http://localhost:5000/toysCategorize/${category}`)
            .then(res => res.json())
            .then(data => {
                seToys(data)
                if(data.length > 6){
                    setMore_LessBtn(true)
                }
            })
    }, [category])
    return (
        <section className='py-20'>
            <div className="container">
                <div className='py-5'>
                    <h1 className='text-center uppercase text-3xl mb-2 font-black font-rancho text-animation'>Shop By Category</h1>
                    <p className='bg-primary border-dotted border-b-4 w-40 mx-auto mb-2'></p>
                    <p className='bg-secondary h-[2px] w-24 mx-auto'></p>
                </div>
                <div className='bg-primary bg-opacity-25 rounded-md px-5 py-2 mb-5'>
                    <ul className='flex items-center gap-5'>
                        <li><button onClick={() => setCategory('Math Toys')} className={`py-3 btn ${category == 'Math Toys' ? 'btn-primary text-white' : 'btn-ghost'}`}>Math Toys</button></li>
                        <li><button onClick={() => setCategory('Language Toys')} className={`py-3 btn ${category == 'Language Toys' ? 'btn-primary text-white' : 'btn-ghost'}`}>Language Toys</button></li>
                        <li><button onClick={() => setCategory('Science Toys')} className={`py-3 btn ${category == 'Science Toys' ? 'btn-primary text-white' : 'btn-ghost'}`}>Science Toys</button></li>
                    </ul>
                </div>
                <div>
                    <div className='grid md:grid-cols-2 gap-5 xl:grid-cols-3 justify-center'>
                        {
                            toys.slice(0, More_or_Less? toys.length : 6).map(toy => <ShopCard key={toy._id} toy={toy} />)
                        }
                    </div>
                    <div className='text-center mt-5'>
                        {
                            (More_LessBtn) && (
                                More_or_Less? 
                                <button className='btn btn-primary text-white' onClick={()=> setMore_or_Less(false)}>Show More</button> 
                                : <button className='btn btn-primary text-white' onClick={()=> setMore_or_Less(true)}>Show Less</button>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;