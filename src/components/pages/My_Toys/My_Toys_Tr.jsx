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
        <tr className='border-b-2 border-dotted border-primary'>
            <th className='text-secondary'>
                {index + 1}
            </th>
            <td>
                <div className="flex items-start space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={picture_url} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-primary capitalize">{name}</div>
                        <div className="text-sm opacity-50">{sub_category}</div>
                        <div className='flex  gap-3'>
                            <p className=""><span className='font-rancho font-bold tracking-[2px]'>Price:</span> <span>${price}</span></p>
                            <p className=""><span className='font-rancho font-bold tracking-[2px]'>Stock:</span> <span>{quantity_available}</span></p>
                        </div>
                        <p className=""><span className='font-rancho font-bold tracking-[2px]'>Rating:</span> <span>{rating}</span></p>
                    </div>
                </div>
            </td>
            <td className='text-left'>
                {seller_name}
                <br />
                <span className="badge badge-ghost badge-md">{seller_email}</span>
            </td>
            <td>{description.slice(0, 100)}</td>
            <th >
                <div className='flex h-full items-center'>
                    <label onClick={() => setUpdateId(_id)} htmlFor="my-modal-5" className='shadow-md p-3 mx-1 text-primary'><FaRegEdit /></label>
                    <button onClick={() => deleteHandler(_id)} className='shadow-md p-3 mx-1 text-primary'><FaRegTrashAlt /></button>
                </div>
            </th>
        </tr>
    );
};

export default My_Toys_Tr;