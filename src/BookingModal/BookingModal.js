import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';

const BookingModal = ({ carOne, carTwo }) => {

    const {user} = useContext(AuthContext);

    return (
        <>
            <div>
                <input type="checkbox" id="booking-modal-one" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="booking-modal-one" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <input type="text" placeholder="Type here" defaultValue={carOne.name} className="input input-bordered w-full mb-2" />
                        <input type="text" placeholder="Type here" defaultValue={carOne.resale} className="input input-bordered w-full" />
                    </div>
                </div>
            </div>

            <div>
                <input type="checkbox" id="booking-modal-two" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="booking-modal-two" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <input type="text" placeholder="Type here" defaultValue={carTwo.name} className="input input-bordered w-full mb-2" />
                        <input type="text" placeholder="Type here" defaultValue={carTwo.resale} className="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" defaultValue={user?.displayName} className="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" defaultValue={user?.email} className="input input-bordered w-full" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;