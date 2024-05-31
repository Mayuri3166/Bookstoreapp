import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
    <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            </form>
            <h3 className="font-bold text-lg text-white">Login</h3>
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
                <button className='bg-red-700 text-white rounded-md px-3 py-1 hover:bg-red-800 duration:200'>Login</button>
                <p className='text-white'>Not registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
            </div>

        </div>
    </dialog>
    </div>
  )
}

export default Login