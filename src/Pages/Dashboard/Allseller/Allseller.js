import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Allseller = () => {

    const [sellers, setSellers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users', {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                // console.log('received', data)
                setSellers(data);
            })
    }, [])

    const handleDelete = id => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Seller deleted successfully`);
                    const remaining = sellers.filter(user => user._id !== id);
                    setSellers(remaining);
                }

            })
    }

    return (
        <div>

            <h3 className='text-3xl mb-5'>All Sellers</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers?.map((user, i) =>
                                user.role === 'seller'
                                &&
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td><label onClick={()=>handleDelete(user._id)} className="btn btn-sm btn-error">Delete</label></td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Allseller;