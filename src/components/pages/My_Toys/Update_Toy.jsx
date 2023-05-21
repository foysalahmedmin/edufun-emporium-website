import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Update_Toy = ({ updateId, updated, setUpdated }) => {
    console.log(updateId)
    const [toyInfo, setToyInfo] = useState([])
    const [updatedToy, setUpdatedToy] = useState(true)
    const { price, quantity_available, description } = toyInfo

    useEffect(() => {
        if (updateId) {
            fetch(`https://edu-fun-emporium-server.vercel.app/toy/${updateId}`)
                .then(res => res.json())
                .then(data => {
                    setToyInfo(data);
                })
        }
    }, [updateId, updatedToy])

    const updateToyHandler = (event) => {
        event.preventDefault()
        const form = event.target;
        const price = +form.price.value;
        const quantity_available = +form.quantity_available.value;
        const description = form.description.value;
        const toy = {
            price,
            quantity_available,
            description
        }
        console.log(toy)
        fetch(`https://edu-fun-emporium-server.vercel.app/toyUpdate/${updateId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if(0 < result.modifiedCount){
                    form.reset()
                    setUpdated(!updated)
                    setUpdatedToy(!updatedToy)
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully Update Your Toy Info',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
    }
    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className='w-full overflow-hidden'>
                        <div className='py-5'>
                            <h1 className='text-center uppercase text-3xl mb-2 font-black font-rancho text-animation'>Update Toy</h1>
                            <p className='bg-primary border-dotted border-b-4 w-40 mx-auto mb-2'></p>
                            <p className='bg-secondary h-[2px] w-24 mx-auto'></p>
                        </div>
                        <form onSubmit={updateToyHandler} className='min-w-3xl' action="">
                            <div>
                                <label htmlFor="price"></label>
                                <input className='w-full py-2 px-5 mb-3 rounded-lg border-dotted bg-transparent border-b-2 border-primary' type="number" name="price" id="price" placeholder='Toy Price' defaultValue={price} required />
                            </div>
                            <div>
                                <label htmlFor="quantity_available"></label>
                                <input className='w-full py-2 px-5 mb-3 rounded-lg border-dotted bg-transparent border-b-2 border-primary' type="number" name="quantity_available" id="quantity_available" placeholder='Toy Quantity Available' defaultValue={quantity_available} required />
                            </div>
                            <div>
                                <label htmlFor="description"></label>
                                <textarea className='w-full py-2 px-5 mb-4 rounded-lg border-dotted bg-transparent border-b-2 border-primary' type="text" name="description" id="description" placeholder='Description' defaultValue={description} required ></textarea>
                            </div>

                            <div className='py-2'><p className='text-warning my-2 text-center'></p></div>
                            <input className='btn btn-primary w-full font-rancho tracking-[3px] text-white' type="submit" value="Update Toy" />
                        </form>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn btn-sm btn-secondary">Close</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Update_Toy;