import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {

    const booking = useLoaderData();

    const { carName, price } = booking;

    return (
        <div>
            <h1 className='text-4xl font bold mb-3'>Paymet for {carName}</h1>
            <h1 className='text-2xl'>Pay <strong>{price}</strong> to confirm your order</h1>

            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>

        </div>
    );
};

export default Payment;