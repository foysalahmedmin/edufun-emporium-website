import React from 'react';

const Review_card = ({ review_data }) => {
    console.log(review_data)
    const {image, name, review_date, reviews, short_location} = review_data
    return (
        <div>
            <div className='flex flex-wrap bg-primary bg-opacity-30 justify-center items-center p-5 gap-2 mx-3 min-h-[300px] rounded-lg'>
                <div className='flex gap-2 items-center'>
                    <div className='rounded-full overflow-hidden'>
                        <img className='h-20 w-20 object-cover' src={image} alt="" />
                    </div>
                    <div>
                        <h3 className='text-primary text-xl mb-1 font-semibold uppercase'>{name}</h3>
                        <p className='text-xs mb-1 '>{short_location}</p>
                        <p className='text-xs'> {review_date}</p>
                    </div>
                </div>
                <div className='border-s-2 border-primary p-2'>
                    {reviews}
                </div>
            </div>
        </div>
    );
};

export default Review_card;