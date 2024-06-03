import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from 'react-hot-toast';


function Signup() {

    const location=useLocation();
    const Navigate=useNavigate();
    const from=location.state?.from?.pathname ||"/"


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit =  async(data) => {
        const userInfo ={
            fullname:data.fullname,
            email:data.email,
            password:data.password,
        }
        await axios.post("https://bookstoreapp-sigma.vercel.app/user/signup", userInfo)
        .then((res)=>{
            console.log(res.data)
            if(res.data){
                // alert("signup successfully")
                toast.success("signup successfully!!");
                Navigate(from, {replace:true});
          
            }
            localStorage.setItem("Users", JSON.stringify(res.data.user))
        }).catch((err)=> {
           if(err.response){
            console.log(err)
            // alert("Error", + err.response.data.message);
            toast.error("This is an error!");
           }
        })
};
      
  return (
    <div className='flex h-screen items-center justify-center  '>
       <div className="w-[500px] ">
        <div className="modal-box">
            <form  onSubmit={handleSubmit(onSubmit)}  method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
           
            <h3 className="font-bold text-lg text-white">Signup</h3>
            <div className='mt-4 space-y-2'>
                <span className='text-white'>Name</span>
                <br/>
                <input type='text' placeholder='Enter you name' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("fullname", { required: true })}/>
                <br />
                {errors.fullname && <span className='text-sm text-bold' >This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
                <span className='text-white'>Email</span>
                <br/>
                <input type='email' placeholder='Enter you email' className='w-80 px-3 py-1 border rounded-md outline-none'  {...register("email", { required: true })}/>
                <br />
                {errors.email && <span className='text-sm text-bold' >This field is required</span>}
            </div>
            {/* password */}
            <div className='mt-4 space-y-2'>
                <span className='text-white'>Password</span>
                <br/>
                <input type='password' placeholder='Enter you Password' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("password", { required: true })}/>
                <br />
                {errors.password && <span className='text-sm text-bold' >This field is required</span>}
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
        </form>
        </div>
    </div>
    </div>
  )
}

export default Signup
