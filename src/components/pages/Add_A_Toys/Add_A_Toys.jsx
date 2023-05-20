import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Add_A_Toys = () => {
    const { user } = useContext(AuthContext)
    const [error, setError] = useState('')
    const addToyHandler = (event) => {
        event.preventDefault()
        const form = event.target ;
        const name = form.name.value ;
        const picture_url = form.picture_url.value ;
        const seller_name = form.seller_name.value ;
        const seller_email = form.seller_email.value ;
        const sub_category = form.sub_category.value ;
        const price = form.price.value ;
        const rating = form.rating.value ;
        const quantity_available = form.quantity_available.value ;
        const description = form.description.value ;
        const toy = {
            name,
            picture_url,
            seller_name,
            seller_email,
            sub_category,
            price,
            rating,
            quantity_available,
            description
        }
        console.log(toy)
        fetch('http://localhost:5000/toys',{
            method : 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(toy)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            if(result.insertedId){
                form.reset()
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully Added Your Toy Info',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <section className='min-h-screen'>
            <div className="pt-[5rem] container py-10 min-h-screen flex justify-center lg:flex-row gap-5 items-center">
                <div className='w-full overflow-hidden'>
                    <div className='py-5'>
                        <h1 className='text-center uppercase text-3xl mb-2 font-black font-rancho text-animation'>Add Toy</h1>
                        <p className='bg-primary border-dotted border-b-4 w-40 mx-auto mb-2'></p>
                        <p className='bg-secondary h-[2px] w-24 mx-auto'></p>
                    </div>
                    <form onSubmit={addToyHandler} className='min-w-3xl' action="">
                        <div className='grid grid-cols-2 gap-5 mb-5'>
                            <div>
                                <label htmlFor="name"></label>
                                <input className='w-full py-2 px-5 mb-5 rounded-lg border-dotted bg-transparent border-b-2 border-primary' type="text" name="name" id="name" placeholder='Toy Name' required />
                            </div>
                            <div>
                                <label htmlFor="picture_url"></label>
                                <input className='w-full py-2 px-5 mb-5 rounded-lg border-dotted bg-transparent border-b-2 border-primary' type="url" name="picture_url" id="picture_url" placeholder='picture URL' required />
                            </div>
                            <div>
                                <label htmlFor="seller_name"></label>
                                <input className='w-full py-2 px-5 mb-5 rounded-lg border-dotted bg-transparent border-b-2 border-primary' type="text" name="seller_name" id="seller_name" placeholder='Seller Name' defaultValue={user?.displayName} required />
                            </div>
                            <div>
                                <label htmlFor="seller_email"></label>
                                <input className='w-full py-2 px-5 mb-5 rounded-lg border-dotted bg-transparent border-b-2 border-primary' type="email" name="seller_email" id="seller_email" placeholder='Seller Email' defaultValue={user?.email} required />
                            </div>
                            <div>
                                <label htmlFor="sub_category"></label>
                                <input className='w-full py-2 px-5 mb-5 rounded-lg border-dotted bg-transparent border-b-2 border-primary' type="text" name="sub_category" id="sub_category" placeholder='Sub Category' required />
                            </div>
                            <div>
                                <label htmlFor="price"></label>
                                <input className='w-full py-2 px-5 rounded-lg border-dotted bg-transparent border-b-2 border-primary' type="number" name="price" id="price" placeholder='Toy Price' required />
                            </div>
                            <div>
                                <label htmlFor="rating"></label>
                                <input className='w-full py-2 px-5 rounded-lg border-dotted bg-transparent border-b-2 border-primary' type="number" name="rating" id="rating" placeholder='Toy Rating' required />
                            </div>
                            <div>
                                <label htmlFor="quantity_available"></label>
                                <input className='w-full py-2 px-5 rounded-lg border-dotted bg-transparent border-b-2 border-primary' type="number" name="quantity_available" id="quantity_available" placeholder='Toy Quantity Available' required />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="description"></label>
                            <textarea className='w-full py-2 px-5 mb-5 rounded-lg border-dotted bg-transparent border-b-2 border-primary' type="text" name="description" id="description" placeholder='Description' required ></textarea>
                        </div>

                        <div className='py-2'><p className='text-warning my-2 text-center'>{error}</p></div>
                        <input className='btn btn-primary w-full font-rancho tracking-[3px] text-white' type="submit" value="Add Toy" />
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Add_A_Toys;