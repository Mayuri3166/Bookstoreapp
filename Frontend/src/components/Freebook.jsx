import React, {useState, useEffect} from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios"
import Cards from './Cards';

function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(()=>{
    const getBook = async()=>{
      try{
        const res = await axios.get("https://bookstoreapp-sigma.vercel.app/book");
        console.log(res.data);
        const data = res.data.filter((data)=>data.category==="FREE")
        setBook(data)

      }catch(error){
        console.log("Error", error)
      }
    }
  getBook();

  },[])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        arrows:false,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
       <div>
        <h1 className='text-white font-semibold text-xl pb-2 '>Free Offered Books</h1>
        <p>In which you can access all the free books, which are more exciting to read, like story books, food books, suspense thriller books and many more.So what to think now you can access all these interesting stuff at one place. Hurry up!!!</p>
       </div>
    <div>
    <Slider {...settings}>
        {book.map((item)=>(
            <Cards item={item} key={item.id} />
        ))}
    </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook
