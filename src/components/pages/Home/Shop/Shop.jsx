import React, { useEffect, useState } from 'react';
import ShopCard from './ShopCard/ShopCard';
const Shop = () => {
    const [toys, seToys] = useState([])
    const [category, setCategory] = useState('Math Toys')
    const [More_LessBtn, setMore_LessBtn] = useState(false);
    const [More_or_Less, setMore_or_Less] = useState(true);

    useEffect(() => {
        fetch(`https://edu-fun-emporium-server.vercel.app/toysCategorize/${category}`)
            .then(res => res.json())
            .then(data => {
                seToys(data)
                if (data.length > 6) {
                    setMore_LessBtn(true)
                }
            })
    }, [category])
    return (
        <section className='py-10'>
            <div className="container" data-aos="fade-up">
                <div className='py-5 text-center'>
                    <h1 className='uppercase text-3xl font-black font-rancho text-animation'>Shop Categorize</h1>
                    <p className='mb-3'>
                        Journey of Knowledge and Fun: Enlightening Young Minds with an Extensive Array of Educational Toys, <br /> Engaging Games, and Interactive Learning Resources at the Sparkling Stars Academy.
                    </p>
                    <p className='bg-primary border-dotted border-b-4 w-40 mx-auto mb-2'></p>
                    <p className='bg-secondary h-[2px] w-24 mx-auto'></p>
                </div>
                <div className='bg-primary bg-opacity-25 rounded-md px-5 py-2'>
                    <ul className='flex items-center justify-center gap-5 font-rancho'>
                        <li><button onClick={() => setCategory('Math Toys')} className={`py-3 btn tracking-[3px] ${category == 'Math Toys' ? 'btn-primary text-white' : 'btn-ghost'}`}>Math Toys</button></li>
                        <li><button onClick={() => setCategory('Language Toys')} className={`py-3 btn tracking-[3px] ${category == 'Language Toys' ? 'btn-primary text-white' : 'btn-ghost'}`}>Language Toys</button></li>
                        <li><button onClick={() => setCategory('Science Toys')} className={`py-3 btn tracking-[3px] ${category == 'Science Toys' ? 'btn-primary text-white' : 'btn-ghost'}`}>Science Toys</button></li>
                    </ul>
                </div>
                <div className='py-5'>
                    <h3 className='text-2xl font-rancho font-bold tracking-[3px] text-secondary'>
                        {category} :
                    </h3>
                </div>
                <div>
                    <div className='grid md:grid-cols-2 gap-5 xl:grid-cols-3 justify-center'>
                        {
                            toys.slice(0, More_or_Less ? toys.length : 6).map(toy => <ShopCard key={toy._id} toy={toy} />)
                        }
                    </div>
                    <div className='text-center mt-5'>
                        {
                            (More_LessBtn) && (
                                More_or_Less ?
                                    <button className='btn btn-primary text-white' onClick={() => setMore_or_Less(false)}>Show More</button>
                                    : <button className='btn btn-primary text-white' onClick={() => setMore_or_Less(true)}>Show Less</button>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shop;