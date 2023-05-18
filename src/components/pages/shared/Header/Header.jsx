import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../../../../providers/ActiveLink';
import { HiMenuAlt1, HiOutlineUserCircle, HiX } from "react-icons/hi";
import logo from '../../../../assets/logo.svg'
import { AuthContext } from '../../../../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [menuActive, setMenuActive] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = (event) => {
            const topHeight = window.scrollY
            if (topHeight > 80) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={`fixed top-0 w-full z-50 transition-[top]  ${scrolled ? 'text-black md:top-0 bg-white' : 'text-black md:top-5 bg-transparent'}`}>
            <div className="container">
                <nav className='flex justify-between items-center py-2'>
                    {
                        menuActive ? <button onClick={() => setMenuActive(false)} className='text-3xl mr-3 lg:hidden'><HiX /></button> : <button onClick={() => setMenuActive(true)} className='text-3xl mr-3 lg:hidden'><HiMenuAlt1 /></button>
                    }
                    <Link to='/' className='lg:w-3/12 mr-auto'>
                        <div className='flex gap-2'>
                            <img className='w-10 h-10' src={logo} alt="" />
                            <h1 className='text-3xl flex items-center font-rancho'><span className='font-black text-primary'>Edu</span>Fun Emporium</h1>
                        </div>
                    </Link>
                    <ul className={`
                        font-rancho
                        w-60
                        p-5 
                        lg:w-6/12 
                        absolute 
                        bg-black 
                        lg:bg-transparent 
                        bg-opacity-50 
                        top-[4.79rem] 
                        min-h-[calc(100vh-9rem)] 
                        lg:min-h-[auto] 
                        leading-10 
                        lg:leading-3 
                        rounded-md 
                        lg:static 
                        lg:flex 
                        justify-center 
                        items-center 
                        gap-7 
                        transition-[left] 
                        ${menuActive ? 'left-0' : 'left-[-100%]'}
                        `}>
                        <li className='font-semibold hover:text-primary border-y-2 border-transparent'><ActiveLink to={"/"}>HOME</ActiveLink></li>
                        <li className='font-semibold hover:text-primary border-y-2 border-transparent'><ActiveLink to={'/allToys'}>ALL-TOYS</ActiveLink></li>
                        <li className='font-semibold hover:text-primary border-y-2 border-transparent'><ActiveLink to={'/myToys'}>MY-TOYS</ActiveLink></li>
                        <li className='font-semibold hover:text-primary border-y-2border-transparent'><ActiveLink to={'/addAToys'}>ADD-A-TOYS</ActiveLink></li>
                        <li className='font-semibold hover:text-primary border-y-2 border-transparent'><ActiveLink to={'/blog'}>BLOG</ActiveLink></li>
                    </ul>
                    <div className='flex justify-end items-center gap-5 lg:w-3/12 font-rancho'>
                        

                        {
                            user ?
                                user.photoURL ?
                                    <img src= {user?.photoURL} title={user.displayName} className='w-11 h-11 rounded-full' alt="" />
                                    : <h3 className=' py-3' title={user.displayName}><HiOutlineUserCircle className='text-4xl' /></h3>
                                : ''
                        }
                        {
                            user ?
                                <button onClick={logOut} className='btn btn-primary text-white'>Log-Out</button>
                                : <Link to='/login'><button className='btn btn-primary text-white'>Log-In</button></Link>
                        }
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;