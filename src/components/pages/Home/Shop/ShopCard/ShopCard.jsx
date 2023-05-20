import React, { useContext } from 'react';
import { AuthContext } from '../../../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import LoadSpinner from '../../../shared/LoadSpinner/LoadSpinner';
import { useNavigate } from 'react-router-dom';
import { Rating } from '@mui/material';

const ShopCard = ({ toy }) => {
    const { _id, name, seller_name, picture_url, price, quantity_available, rating, seller_email, sub_category, description } = toy;
    const navigate = useNavigate()
    const { user, loading } = useContext(AuthContext)
    const detailsHandler = () => {
        if (loading) {
            return <LoadSpinner />
        } else if (!user) {
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
                    navigate(`/toy/${_id}`, { replace: true })
                }
            })
        } else {
            navigate(`/toy/${_id}`, { replace: true })
        }
    }
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className='w-full h-60 object-cover' src={picture_url} alt="Toy" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-primary">
                        {name}
                    </h2>
                    <p className='text-secondary'>{sub_category}</p>
                    <p>
                        {description.slice(0, 100)}.....
                    </p>
                    <div className='flex justify-between gap-3'>
                        <p className=""><span className='font-rancho font-bold text-lg text-secondary tracking-[2px]'>Price:</span> <span className='capitalize text-primary font-bold text-lg'>${price}</span></p>
                        <p className=""><span className='font-rancho font-bold text-lg text-secondary tracking-[2px]'>Stock:</span> <span className='capitalize text-primary font-bold text-lg'>{quantity_available}</span></p>
                    </div>
                    <div className='uppercase flex items-center gap-4'>
                        <Rating
                            style={{ maxWidth: 130 }}
                            value={rating}
                            readOnly
                        />
                        <span className='capitalize text-primary font-bold text-lg'>{rating}</span>
                    </div>
                    <div className='text-right'>
                        <button onClick={detailsHandler} className='btn btn-primary btn-sm text-white'>Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;