import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyProduct = () => {

    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState(null);



    // const { data: products, isLoading, refetch } = useQuery({
    //     queryKey: ['products'],
    //     queryFn: async () => {
    //         try {
    //             const res = await fetch('http://localhost:5000/products', {
    //                 headers: {
    //                     authorization: `bearer ${localStorage.getItem('accessToken')}`
    //                 }
    //             });
    //             const data = await res.json();
    //             return data;
    //         }
    //         catch (error) {

    //         }
    //     }
    // });

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

    const handleDelete = id => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Product deleted successfully`);
                    const remaining = products.filter(odr => odr._id !== id);
                    setProducts(remaining);
                }

            })
    }


    return (
        <div>

            <h3 className='text-3xl mb-5'>My Products</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Conditon</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Delete</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products?.map((product, i) =>
                                <tr key={product._id}>
                                    <th>{i + 1}</th>
                                    <td>{product.name}</td>
                                    <td>{product.condition}</td>
                                    <td>{product.price}</td>
                                    <td>available</td>
                                    <td><label  onClick={()=>handleDelete(product._id)} className="btn btn-sm btn-error">Delete</label></td>
                                    <td>Advertise</td>
                                </tr>
                                )
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyProduct;