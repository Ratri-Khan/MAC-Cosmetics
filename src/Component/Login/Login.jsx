import React from 'react';

const Login = () => {
    return (
        <form className='w-6/12 m-auto'>
            <div className="form-control w-8/12 m-auto">
                <label className='my-3'><small>Name</small></label>
                <input type="text"name='name'placeholder='Enter Your Name' className='border-2 w-full p-2 rounded border-fuchsia-700' />
            </div>
            <div className="form-control w-8/12 m-auto">
                <label className='my-3'><small>Email</small></label>
                <input type="email"placeholder='Enter Your Mail' name='email'className='border-2 w-full p-2 rounded border-fuchsia-700' />
            </div>
            <div className='form-control w-8/12 m-auto my-4'>
                <input className='text-white font-bold cursor-pointer  w-full p-2 rounded bg-fuchsia-700' type="submit" value="submit" />
            </div>
        </form>
    );
};

export default Login;