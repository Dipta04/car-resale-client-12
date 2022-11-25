import React, { useEffect, useState } from 'react';

const Alluser = () => {

    const [users, setUsers] = useState([]);

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
                setUsers(data);
            })
    }, [])

    return (
        <div>

        <h3 className='text-3xl mb-5'>All Users</h3>
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users?.map((user, i) =>
                            <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                 <td>{user.email}</td>
                                <td><label className="btn btn-sm btn-error">Delete</label></td>
                            </tr>)
                    }

                </tbody>
            </table>
        </div>

    </div>
    );
};

export default Alluser;