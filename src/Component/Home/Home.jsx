import React from 'react';
import Banner from '../Banner/Banner';
import MakeupGallary from '../MakeupGallary/MakeupGallary';
import Features from '../Feature/Feature';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MakeupGallary></MakeupGallary>
            <Features></Features>
            <Review></Review>
        </div>
    );
};

export default Home;