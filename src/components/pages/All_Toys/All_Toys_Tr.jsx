import React from 'react';
import { Link } from 'react-router-dom';

const All_Toys_Tr = ({toy, index}) => {
    const {_id, name, seller_name, price, sub_category, quantity_available} = toy
    return (
        <tr className='text-center border-b-2 border-dotted border-primary'>
            <th className='text-secondary'>{index + 1}</th>
            <td>{seller_name}</td>
            <td>{name}</td>
            <td>{sub_category}</td>
            <td><span className='text-secondary'>$</span>{price}</td>
            <td>{quantity_available}</td>
            <td><Link to={`/toy/${_id}`}><button className='btn btn-primary btn-sm text-white'>Details</button></Link></td>
        </tr>
    );
};

export default All_Toys_Tr;