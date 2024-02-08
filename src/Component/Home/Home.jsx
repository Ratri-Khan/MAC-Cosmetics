import React from 'react';
import Banner from '../Banner/Banner';
import MakeupGallary from '../MakeupGallary/MakeupGallary';
import Review from '../Review/Review';
import Featured from '../Featured/Featured';
import AboutProduct from '../AboutProduct/AboutProduct';


const Home = () => {
    return (
        <div className='bg-slate-50 font-[Poppins] '>
            <Banner></Banner>
            <MakeupGallary></MakeupGallary>
            {/* <Featured></Featured> */}
            <AboutProduct></AboutProduct>
            <Review></Review>
        </div>
    );
};

export default Home;