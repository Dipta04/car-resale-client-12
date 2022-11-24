import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../Contexts/AuthProvider';

const BookingModal = ({ carOne, carTwo }) => {

    const {user} = useContext(AuthContext);

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const carName = form.carname.value;
        const price = form.price.value;
        const name = form.name.value;
        const email = form.email.value;
        const location = form.location.value;
        const phone = form.phone.value;
        const booking = {
            carName: carName,
            price: price,
            buyer: name,
            email,
            location,
            phone
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Booking confirmed');
                    // refetch();
                }

            })
    }

    return (
        <>
            <div>
                <input type="checkbox" id="booking-modal-one" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="booking-modal-one" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <form onSubmit={handleBooking}>
                        <input name='carname' type="text" placeholder="Type here" defaultValue={carOne.name} className="input input-bordered w-full mb-2" disabled/>
                        <input name='price'  type="text" defaultValue={carOne.resale} className="input input-bordered w-full mb-2" disabled/>
                        <input name='name' type="text" placeholder="Type here" defaultValue={user?.displayName} className="input input-bordered w-full mb-2" disabled/>
                        <input name='email' type="text" placeholder="Type here" defaultValue={user?.email} className="input input-bordered w-full mb-2" disabled/>
                        <input name='location' type="text" placeholder="Meeting location" className="input input-bordered w-full mb-2" />
                        <input name='phone' type="text" placeholder="Phone-number" className="input input-bordered w-full mb-2" />
                        <input className="btn btn-accent w-full" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>

            <div>
                <input type="checkbox" id="booking-modal-two" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="booking-modal-two" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <form onSubmit={handleBooking}>
                        <input name='carname' type="text" placeholder="Type here" defaultValue={carTwo.name} className="input input-bordered w-full mb-2" disabled/>
                        <input name='price'  type="text" placeholder="Type here" defaultValue={carTwo.resale} className="input input-bordered w-full mb-2" disabled/>
                        <input name='name' type="text" placeholder="Type here" defaultValue={user?.displayName} className="input input-bordered w-full mb-2" disabled/>
                        <input name='email' type="text" placeholder="Type here" defaultValue={user?.email} className="input input-bordered w-full mb-2" disabled/>
                        <input name='location' type="text" placeholder="Meeting location" className="input input-bordered w-full mb-2" />
                        <input name='phone' type="text" placeholder="Phone-number" className="input input-bordered w-full mb-2" />
                        <input className="btn btn-accent w-full" type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;