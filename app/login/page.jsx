import React from 'react'
import Login from '../components/Login'

const page = () => {
  return (
    <div className="bg-cover bg-center bg-fixed">
    <div className="h-screen flex justify-center items-center">
        <div className="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
            <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
            <Login />
        </div>
    </div>
</div>
  )
}

export default page