import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from 'react-hot-toast';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit =  async(data) => {
        const userInfo ={
            email:data.email,
            password:data.password,
        }
        await axios.post("https://bookstoreapp-ten.vercel.app/user/login", userInfo)//https://bookstoreapp-ten.vercel.app/
        .then((res)=>{
            console.log(res.data)
            if(res.data){
                // alert("login successfully");
                toast.success("login successfully!!");
                document.getElementById("my_modal_3").close();
                setTimeout(() => {
                    window.location.reload();
                    localStorage.setItem("Users", JSON.stringify(res.data.user))
                }, 1000);
            }
        }).catch((err)=> {
           if(err.response){
            console.log(err)
            // alert("Error", + err.response.data.message);
            toast.error("This is an error :(!!")
            setTimeout(() => {}, 2000);
           }
        });
      };

  return (
    <div>
    <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={()=>document.getElementById("my_modal_3").close()}>✕</Link>
            <h3 className="font-bold text-lg text-white">Login</h3>
            <div className='mt-4 space-y-2'>
                <span className='text-white'>Email</span>
                <br/>
                <input type='email' placeholder='Enter you email' className='w-70 px-3 py-1 border rounded-md outline-none' {...register("email", { required: true })}/>
                <br />
                {errors.email && <span className='text-sm text-bold' >This field is required</span>}
            </div>
            {/* password */}
            <div className='mt-4 space-y-2'>
                <span className='text-white'>Password</span>
                <br/>
                <input type='password' placeholder='Enter you Password' className='w-70 px-3 py-1 border rounded-md outline-none'{...register("password", { required: true })}/>
                <br />
                {errors.password && <span  className='text-sm text-bold'>This field is required</span>}
            </div>
            {/* button */}
            <div className='flex justify-around mt-4'>
                <button className='bg-red-700 text-white rounded-md px-3 py-1 hover:bg-red-800 duration:200'
                >Login</button>
                <p className='text-white'>Not registered?{" "} <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link>{" "}</p>
            </div>

            </form>

        </div>
    </dialog>
    </div>
  )
}

export default Login
