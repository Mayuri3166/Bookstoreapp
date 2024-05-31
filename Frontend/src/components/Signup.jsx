import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

function Signup() {
  return (
    <div className='flex h-screen items-center justify-center  '>
       <div className="w-[500px] ">
        <div className="modal-box">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            </form>
            <h3 className="font-bold text-lg text-white">Signup</h3>
            <div className='mt-4 space-y-2'>
                <span className='text-white'>Name</span>
                <br/>
                <input type='text' placeholder='Enter you name' className='w-80 px-3 py-1 border rounded-md outline-none'/>
            </div>
            <div className='mt-4 space-y-2'>
                <span className='text-white'>Email</span>
                <br/>
                <input type='email' placeholder='Enter you email' className='w-80 px-3 py-1 border rounded-md outline-none'/>
            </div>
            {/* password */}
            <div className='mt-4 space-y-2'>
                <span className='text-white'>Password</span>
                <br/>
                <input type='text' placeholder='Enter you Password' className='w-80 px-3 py-1 border rounded-md outline-none'/>
            </div>
            {/* button */}
            <div className='flex justify-around mt-4'>
                <button className='bg-red-700 text-white rounded-md px-3 py-1 hover:bg-red-800 duration:200'>Signup</button>
                <p className='text-white'>Have account?<button to="/" className='underline text-blue-500 cursor-pointer'
                onClick={()=>
                document.getElementById("my_modal_3").showModal()}
                >Login</button>
                <Login/></p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Signup