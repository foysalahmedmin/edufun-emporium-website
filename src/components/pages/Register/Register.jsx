import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const { register, updateProfile_name_url } = useContext(AuthContext)

    const registerHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image_url = form.image_url.value;
        const email = form.email.value
        const password = form.password.value
        const con_password = form.con_password.value
        setError('')
        if (password !== con_password) {
            setError('Your Password did not match!')
        } else if (password.length < 6) {
            setError('Password must be 6 digits')
        } else {
            console.log(name, image_url, email, password, con_password)
            register(email, password)
                .then(result => {
                    const createdUser = result.user
                    navigate('/', { replace: true })
                    userProfileUpdate(createdUser, name, image_url)
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage)
                    console.log(errorMessage)
                });

        }
    }
    const userProfileUpdate = (user, name, image_url) => {
        updateProfile_name_url(user, name, image_url)
            .then(() => { })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                console.log(errorMessage)
            });
    }
    return (
        <section className='min-h-screen'>
            <div className="pt-[5rem] container py-10 min-h-screen flex justify-center lg:flex-row gap-5 items-center">
                <div className='w-full lg:w-1/2 overflow-hidden'>
                    <div className='py-5'>
                        <h1 className='text-center uppercase text-3xl mb-2 font-black font-rancho text-animation'>Register</h1>
                        <p className='bg-primary border-dotted border-b-4 w-40 mx-auto mb-2'></p>
                        <p className='bg-secondary h-[2px] w-24 mx-auto'></p>
                    </div>
                    <form onSubmit={registerHandler} className='min-w-3xl' action="">
                        <div>
                            <label htmlFor="name"></label>
                            <input className='w-full py-2 px-5 mb-5 rounded-lg border-dotted bg-transparent border-b-2 border-primary' type="text" name="name" id="name" placeholder='Name' required />
                            <label htmlFor="image_url"></label>
                            <input className='w-full py-2 px-5 mb-5 rounded-lg border-dotted bg-transparent border-b-2 border-primary' type="text" name="image_url" id="image_url" placeholder='Image URL' />
                            <label htmlFor="email"></label>
                            <input className='w-full py-2 px-5 mb-5 rounded-lg border-dotted bg-transparent border-b-2 border-primary' type="email" name="email" id="email" placeholder='Email' required />
                            <label htmlFor="password"></label>
                            <input className='w-full py-2 px-5 mb-5 rounded-lg border-dotted bg-transparent border-b-2 border-primary' type="password" name="password" id="password" placeholder='Password' required />
                            <label htmlFor="con_password"></label>
                            <input className='w-full py-2 px-5 rounded-lg border-dotted bg-transparent border-b-2 border-primary' type="password" name="con_password" id="con_password" placeholder='Confirm Password' required />
                        </div>
                        <div className='py-2'><p className='text-warning my-2 text-center'>{error}</p></div>
                        <input className='btn btn-primary w-full font-rancho tracking-[3px] text-white' type="submit" value="Submit" />
                    </form>
                    <p className='text-center py-3'>Already Have Account? <Link to='/login' className='text-animation font-bold'> LogIn </Link> Please. </p>

                </div>
            </div>
        </section>
    );
};

export default Register;