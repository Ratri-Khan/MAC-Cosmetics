import React from 'react';
import Banner from '../Banner/Banner';
import MakeupGallary from '../MakeupGallary/MakeupGallary';
import Review from '../Review/Review';
import Featured from '../Featured/Featured';
import AboutProduct from '../AboutProduct/AboutProduct';


const Home = () => {
    return (
        <div className=' bg-fuchsia-100'>
            <Banner></Banner>
            <MakeupGallary></MakeupGallary>
            <Featured></Featured>
            <AboutProduct></AboutProduct>
            <Review></Review>
        </div>
    );
};

export default Home;