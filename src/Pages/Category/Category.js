import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../BookingModal/BookingModal';

const Category = ({ setCarBooking, car }) => {
    const { carOne, carTwo, category } = useLoaderData();

    return (
        <div>
            <h2 className='font-bold text-2xl mt-5 mb-5 text-center'>{category}</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>

                <div className="card shadow-xl">
                    <figure><img src={carOne.picture} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{carOne.name}</h2>
                        <p>Location: {carOne.location}</p>
                        <p>Resale Price:  ${carOne.resale}</p>
                        <p>Original Price:  ${carOne.Original}</p>
                        <p>Year Used:  {carOne.use}</p>
                        <p>Post On:  {carOne.post}</p>
                        <p>Seller:  {carOne.seller}</p>
                        <label htmlFor="booking-modal-one" className='btn btn-accent'>Book Now</label>
                    </div>
                </div>

                <div className="card shadow-xl">
                    <figure><img src={carTwo.picture} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{carTwo.name}</h2>
                        <p>Location: {carTwo.location}</p>
                        <p>Resale Price:  ${carTwo.resale}</p>
                        <p>Original Price:  ${carTwo.Original}</p>
                        <p>Year Used:  {carTwo.use}</p>
                        <p>Post On:  {carTwo.post}</p>
                        <p>Seller:  {carTwo.seller}</p>
                        <label htmlFor="booking-modal-two" className='btn btn-accent'>Book Now</label>

                    </div>
                </div>

                <BookingModal
                carOne={carOne}
                carTwo={carTwo}
                ></BookingModal>

            </div>
        </div>
    );
};

export default Category;