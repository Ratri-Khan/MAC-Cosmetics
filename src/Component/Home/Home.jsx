import React from 'react';
import MakeupGallary from '../MakeupGallary/MakeupGallary';
import Review from '../Review/Review';
import Featured from '../Featured/Featured';
import AboutProduct from '../AboutProduct/AboutProduct';
import Cart from '../Cart/Cart';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div className='bg-lime-100 font-[Poppins] '>
            <Banner></Banner>
            <MakeupGallary></MakeupGallary>
            <Cart></Cart>
            <Featured></Featured>
            <AboutProduct></AboutProduct>            
            <Review></Review>
        </div>
    );
};

export default Home;