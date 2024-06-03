import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from "axios"
import { Link } from 'react-router-dom'



function Course() {

  const [book, setBook] = useState([]);
  useEffect(()=>{
    const getBook = async()=>{
      try{
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data)

      }catch(error){
        console.log("Error", error)
      }
    }
  getBook();

  },[])

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl text-white'>We're delighted to have you <span className='text-red-500'>here!</span> :)</h1>
        <p className='mt-12 '>
        Books hold a significant place in our lives and society due to their multifaceted contributions. They are powerful tools for education, providing structured knowledge and fostering intellectual growth. Through textbooks and academic literature, books facilitate formal learning, offering in-depth exploration of subjects that form the foundation of education in schools, colleges, and universities. Beyond formal education, non-fiction books expand our understanding of the world by delivering factual information and insights across various fields such as science, history, and technology.
        </p>
        <Link to="/">
        <button className='bg-red-700 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-800 duration-300 mt-6'>Back</button>
        </Link>
    </div>
    <div className='mt-12 grid grid-col-1 md:grid-cols-4'>
        {
            book.map((item) =>(
                <Cards key={item.id} item={item} />
            ))
        }
    </div>
    </div>
    </>
  )
}

export default Course