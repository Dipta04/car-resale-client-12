import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, category, carOne, carTwo } = product;
    return (
        <div>
            <h2 className='font-bold text-2xl mt-5 mb-5 text-center'>{category}</h2>
            <div className='text-center'>
             <Link to={`/carOptions/${_id}`}><button className='btn btn-success font-bold text-white'>Category</button></Link>  
               </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-6'>

                <div className="card shadow-xl">
                    <figure><img src={carOne.picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{carOne.name}</h2>
                        <p>Location:  {carOne.location}</p>
                        <p>Resale Price:  ${carOne.resale}</p>
                        <p>Original Price:  ${carOne.Original}</p>
                        <p>Year Used:  {carOne.use}</p>
                        <p>Post On:  {carOne.post}</p>
                        <p>Seller:  {carOne.seller}</p>
                        <button className='btn btn-accent'>Book Now</button>
                    </div>
                </div>

                <div className="card shadow-xl">
                    <figure><img src={carTwo.picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{carTwo.name}</h2>
                        <p>Location: {carTwo.location}</p>
                        <p>Resale Price:  ${carTwo.resale}</p>
                        <p>Original Price:  ${carTwo.Original}</p>
                        <p>Year Used:  {carTwo.use}</p>
                        <p>Post On:  {carTwo.post}</p>
                        <p>Seller:  {carTwo.seller}</p>
                        <button className='btn btn-accent'>Book Now</button>
                    </div>
                </div>

               

            </div>
        </div>
    );
};

export default Product;