import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../Hooks/useToken';

const SellerSignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);

    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    const handleSignUp = (data) => {
        setSignUpError('');
        createUser(data.email, data.password, data.role)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('Seller Successfully Created.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role);
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            });
    }

    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('https://assignment-server-eta.vercel.app/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    }


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl font-bold text-center text-teal-600'>Sign Up As Seller</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {
                            errors.name && <p className='text-red-500'>{errors.name.message}</p>
                        }

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Role</span>
                        </label>
                        <input type="text" {...register("role", {
                            required: "role is Required"
                        })} defaultValue='seller' className="input input-bordered w-full max-w-xs" />
                        {
                            // errors.role && <p className='text-red-500'>{errors.role.message}</p>
                        }

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {
                            errors.email && <p className='text-red-500'>{errors.email.message}</p>
                        }

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />

                        {
                            errors.password && <p className='text-red-500'>{errors.password.message}</p>
                        }

                    </div>

                    <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />

                    {
                        signUpError && <p className='text-red-600'>{signUpError}</p>
                    }

                </form>

                <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>

                <div className="dropdown">
                    <label tabIndex={0} className="btn m-1">Seller  /  Buyer</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/signup'>Sign Up as Buyer</Link></li>
                        <li><Link to='/sellerSignup'>Sign Up as Seller</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SellerSignUp;