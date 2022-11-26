import React, { useEffect, useState } from 'react';

const Advertise = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products', {
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log('received', data)
        setProducts(data);
      })
  }, [])

  return (
    <div>
      {
        products.map((product, i) =>
        <div>
          {
            product.advertise === 'advertise' &&
            <div className='my-10 grid grid-cols-2'>
          <div className="card card-side bg-slate-200 shadow-xl">
            <div className="card-body">
              <h2 className='text-4xl font-bold'>Advertised Items</h2>
              <h2 className="card-title text-center">Name: {product.name}</h2>
              <p>Condition: {product.condition}</p>
              <p>Price: ${product.price}</p>
              <p>Location: {product.location}</p>
            </div>
          </div>
          </div>
         }
          </div>
        )
      }
    </div>
  );

};

export default Advertise;