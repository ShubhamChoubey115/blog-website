import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';


const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div>
        <Header/>
        <div className='w-11/12 max-w-[670px] mx-auto flex gap-2'>
            <button className='mt-24 bg-slate-200 py-1 px-4 rounded-md'
            onClick={() => navigation(-1)}
            >
               {"<-"} back
            </button>
            <h2 className=' mt-24 bg-slate-100 py-1 px-4'>
                Blogs Tagged <span className='italic font-bold'>#{tag}</span>
            </h2>
        </div>
        <div className='-mt-10'>
        <Blogs/>
        </div>
        <Pagination/>
      
    </div>
  )
}

export default TagPage
