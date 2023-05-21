import React, { useEffect } from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import Gallery from '../Gallery/Gallery';
import Shop from '../Shop/Shop';
import useTitle from '../../../../custom_hooks/useTitle';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useTitle('Home')
    useEffect(()=>{
        AOS.init()
    }, [])
    return (
        <>
            <HomeBanner />
            <Gallery />
            <Shop />
        </>
    );
};

export default Home;