import React from 'react';
import { Link, useRouteError } from 'react-router-dom'
import image from "../../../../assets/image404.png"

const ErrorPage = () => {
    const { error } = useRouteError()
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <img className='mx-auto max-w-md' src={image} alt="" />
                <div className='max-w-md text-center'>
                    <p className='text-2xl pt-5 font-semibold md:text-3xl text-red-800 mb-8'>
                        {error?.message}
                    </p>
                    <Link to='/'>
                        <button className='btn primary-btn'>Back to Home-Page</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;