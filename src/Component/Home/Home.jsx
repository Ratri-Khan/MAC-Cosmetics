import React from 'react';
import Banner from '../Banner/Banner';
import MakeupGallary from '../MakeupGallary/MakeupGallary';
import Review from '../Review/Review';
import Featured from '../Featured/Featured';
import Ayurvedic from '../ayurvedic/ayurvedic';


const Home = () => {
    return (
        <div className=' bg-fuchsia-100'>
            <Banner></Banner>
            <MakeupGallary></MakeupGallary>
            <Featured></Featured>
            <Ayurvedic></Ayurvedic>
            <Review></Review>
        </div>
    );
};

export default Home;