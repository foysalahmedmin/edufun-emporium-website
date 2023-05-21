import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import LoadSpinner from '../shared/LoadSpinner/LoadSpinner';
import Swal from 'sweetalert2';

const All_Toys_Tr = ({toy, index}) => {
    const {user, loading} = useContext(AuthContext)
    const navigate = useNavigate()
    const {_id, name, seller_name, price, sub_category, quantity_available} = toy
    const detailsHandler = () =>{
        if(loading){
            return <LoadSpinner />
        }else if(!user){
            Swal.fire({
                title: 'Want to login?',
                text: "If you want to see the toy details, then you must login!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#00b8ec',
                cancelButtonColor: '#944b9c',
                confirmButtonText: 'Yes, LogIn'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate(`/toy/${_id}`)
                }
              })
        }else{
            navigate(`/toy/${_id}`)
        }
    }
    return (
        <tr className='text-center border-b-2 border-dotted border-primary' data-aos="fade-up">
            <th className='text-secondary'>{index + 1}</th>
            <td>{seller_name}</td>
            <td>{name}</td>
            <td>{sub_category}</td>
            <td><span className='text-secondary'>$</span>{price}</td>
            <td>{quantity_available}</td>
            <td><button onClick={detailsHandler} className='btn btn-primary btn-sm text-white'>Details</button></td>
        </tr>
    );
};

export default All_Toys_Tr;