import { Rating } from '@mui/material';
import React from 'react';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const My_Toys_Tr = ({ toy, index, setUpdateId, updated, setUpdated }) => {
    const { _id, name, seller_name, picture_url, price, quantity_available, rating, seller_email, sub_category, description } = toy
    const deleteHandler = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00b8ec',
            cancelButtonColor: '#944b9c',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myToys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(result => {
                        setUpdated(!updated)
                        if (0 < result.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <tr className='border-b-2 border-dotted border-primary' data-aos="fade-up">
            <th className='text-secondary text-center p-3'>
                {index + 1}
            </th>
            <td className='py-3'>
                <div className="flex items-start space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle  w-20 h-20">
                            <img className='h-full' src={picture_url} alt="Toy Image" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-primary capitalize">{name}</div>
                        <div className="text-sm opacity-50">{sub_category}</div>
                        <div className='flex  gap-3'>
                            <p className=""><span className='font-rancho font-bold tracking-[2px]'>Price:</span> <span>${price}</span></p>
                            <p className=""><span className='font-rancho font-bold tracking-[2px]'>Stock:</span> <span>{quantity_available}</span></p>
                        </div>
                        <div className='uppercase flex items-center gap-4'>
                            <Rating
                                style={{ maxWidth: 130 }}
                                value={rating}
                                readOnly
                            />
                            <span className='capitalize text-primary font-bold'>{rating}</span>
                        </div>
                    </div>
                </div>
            </td>
            <td className='py-3'>
                {seller_name}
                <br />
                <span className="badge badge-ghost badge-md">{seller_email}</span>
            </td>
            <td className='max-w-[150px] py-3'>
                <p className='shrink-0'>{description.slice(0, 100)}.</p>
            </td>
            <th className='py-3' >
                <div className='flex h-full items-center'>
                    <label onClick={() => setUpdateId(_id)} htmlFor="my-modal-5" className='shadow-md p-3 mx-1 text-primary'><FaRegEdit /></label>
                    <button onClick={() => deleteHandler(_id)} className='shadow-md p-3 mx-1 text-primary'><FaRegTrashAlt /></button>
                </div>
            </th>
        </tr>
    );
};

export default My_Toys_Tr;