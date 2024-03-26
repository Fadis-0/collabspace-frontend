import React from 'react';
import { Link } from 'react-router-dom';

import {
  AiOutlineGithub,
  AiOutlineGoogle,
} from 'react-icons/ai'

const Login: React.FC = () => {
  
  return (
    <div className="max-w-lg mx-auto px-4">
      <div className="bg-white shadow rounded-lg px-10 py-8 mt-16">
          <h2 className="text-3xl font-bold text-center">
            Welcome!
          </h2>
          <h2 className="text-gray-700 mt-1 mb-10 text-center">
            Login to your account
          </h2>
          <button className="flex items-center justify-center gap-4 bg-gray-50 hover:bg-gray-100 text-gray-950 font-semibold py-2 px-4 rounded mb-4 w-full border shadow-sm transition-all duration-200">
            Login with Google
            <AiOutlineGoogle className="text-2xl" />
          </button>
          <button className="flex items-center justify-center gap-4 bg-gray-800 hover:bg-gray-950 text-white font-semibold py-2 px-4 rounded mb-4 w-full shadow-sm transition-all duration-200">
            Login with GitHub
            <AiOutlineGithub className="text-2xl" />
          </button>
          <hr className="my-8" />
          <input
            type="text"
            className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" 
            placeholder="Email"
          />
          <input
            type="password"
            className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            placeholder="Password"
          />
          <a
            href="#"
            className="text-blue-700 hover:text-blue-800 mb-4 inline-block text-sm mt-1"
          >
            Forgot your password?
          </a>
          <button className="shadow-sm mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline transition-all duration-200" >
            Login
          </button>
          <p className="text-gray-700 mt-4 flex gap-2 items-center justify-center">
            Don't have an account? 
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700"
            >
              Sign up
            </a>
          </p>
		  </div>
    </div>
  )
}

export default Login