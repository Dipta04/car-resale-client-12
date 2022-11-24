import React from 'react';
import Discount from '../Discount/Discount';
import Products from '../Products/Products';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Products></Products>
            <Discount></Discount>
        </div>
    );
};

export default Home;