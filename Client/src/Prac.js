import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Prac = () => {

    
    return (
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-md">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample image" />
        </div>
        <div className="md:w-1/3 max-w-sm border-2 border-dotted pt-10 pb-10 pl-5 pr-5">
        <h1 className='text-center text-2xl mb-2 font-bold'>Login </h1> <hr className='mb-5 '/>
        <label className='font-semibold'>Email Address:</label>
          <input className="text-sm mt-2 w-full px-4 py-3 border border-solid border-gray-300 rounded mb-5" type="text" placeholder="Enter Email Address" />
          <label className='font-semibold '>Password</label>
          <input className="text-sm  w-full px-4 py-3 border border-solid border-gray-300 rounded mt-2" type="password" placeholder="Enter Password" />
          <div className="text-center md:text-center">
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-md tracking-wider" type="submit">Login</button>
          </div>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Don't have an account? <a className="text-red-600 hover:underline hover:underline-offset-4" href="#">Register</a>
          </div>
        </div>
      </section>
    
    );
}

export default Prac;
