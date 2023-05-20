import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import Gallery from '../Gallery/Gallery';
import Shop from '../Shop/Shop';
import LoadSpinner from '../../shared/LoadSpinner/LoadSpinner';

const Home = () => {
    return (
        <>
            <HomeBanner />
            <Gallery />
            <Shop />
        </>
    );
};

export default Home;