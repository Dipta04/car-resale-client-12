import React from 'react';

const Slider = () => {
    return (
        <div className='sm:w-1/2 mx-auto'>

            <div className="carousel">
                <div id="item1" className="carousel-item w-full">
                <img src="https://i.ibb.co/M918P6P/Banner.jpg" className="w-full" alt=''/>
                </div>
                <div id="item2" className="carousel-item w-full">
                <img src="https://i.ibb.co/X3sbd18/Banner2.jpg" className="w-full" alt=''/>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
            </div>

        </div>
    );
};

export default Slider;