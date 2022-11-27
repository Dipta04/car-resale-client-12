import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate();

   const handleAddProducts = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const condition = form.condition.value;
    const mobile = form.mobile.value;
    const location = form.location.value;
    const category = form.category.value;
    const description = form.description.value;
    const year = form.year.value;
    const addProduct = {
        name,
        price,
        condition,
        mobile,
        location,
        category,
        description,
        year,
    }
    fetch('https://assignment-server-eta.vercel.app/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(addProduct)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.acknowledged) {
                toast.success('Products added successfully');
                // refetch();
                navigate('/dashboard/myproduct');
            }

        })
   }

    return (
        <div>
            <h2 className='text-4xl font-bold text-center my-4'>Add Your Product For Sale</h2>
            <form className="card" onSubmit={handleAddProducts}>
            <input name='name' type="text" placeholder="Type Product Name" className="input input-bordered w-full mb-2" />
            <input name='price' type="text" placeholder="Price" className="input input-bordered w-full mb-2" />
            <input name='condition' type="text" placeholder="Condition" className="input input-bordered w-full mb-2" />
            <input name='mobile' type="text" placeholder="Mobile number" className="input input-bordered w-full mb-2" />
            <input name='location' type="text" placeholder="Location" className="input input-bordered w-full mb-2" />
            <input name='category' type="text" placeholder="Category" className="input input-bordered w-full mb-2" />
            <input name='description' type="text" placeholder="Description" className="input input-bordered w-full mb-2" />
            <input name='year' type="text" placeholder="Purchase Year" className="input input-bordered w-full mb-2" />
            <input className="btn btn-accent w-1/2 lg:mx-auto" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddProduct;