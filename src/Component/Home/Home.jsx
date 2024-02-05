import React from 'react';
import Banner from '../Banner/Banner';
import MakeupGallary from '../MakeupGallary/MakeupGallary';
import Features from '../Feature/Feature';
import Review from '../Review/Review';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div className=' bg-fuchsia-100'>
            <Banner></Banner>
            <MakeupGallary></MakeupGallary>
            <Featured></Featured>
            <Review></Review>
        </div>
    );
};

export default Home;