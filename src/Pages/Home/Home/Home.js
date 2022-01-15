import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import DeliveryService from '../DeliveryService/DeliveryService';
import HomeProducts from '../HomeProducts/HomeProducts';
import HomeReviews from '../Reviews/HomeReviews/HomeReviews';

/*-----------------------------------------------------
                    Implement home page
-------------------------------------------------------*/
const Home = () =>
{
    return (
        <div id="home">
            <Banner />
            <HomeProducts />
            <DeliveryService />
            <Contact />
            <HomeReviews />
        </div>
    );
};

export default Home;