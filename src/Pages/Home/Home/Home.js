import React from 'react';
import Advertise from '../../Dashboard/Advertise/Advertise';
import Discount from '../Discount/Discount';
import Products from '../Products/Products';
import Slider from '../Slider/Slider';

const Home = () => {

    return (
        <div>
            <Slider></Slider>
            <Products></Products>
            <Advertise></Advertise>
            <Discount></Discount>
        </div>
    );
};

export default Home;