import React, { useEffect, useState } from 'react';
import Category from '../Pages/Category/Category';
import BookingModal from './BookingModal';

const Booking = () => {
    const [carBooking, setCarBooking] = useState([]);

   useEffect(()=>{
    fetch('http://localhost:5000/cars')
    .then(res => res.json())
    .then(data=>setCarBooking(data))
   },[])


    return (
        <div>
            <div>
            {
                carBooking.map(car=><BookingModal key={car._id} car={car}></BookingModal>)
            }
            </div>
            <div>
                {
                    carBooking.map(car=><Category key={car._id} setCarBooking={setCarBooking} car={car}></Category>)
                }
            </div>
        </div>
    );
};

export default Booking;