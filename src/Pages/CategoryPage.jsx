import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header/>
      <div className='w-11/12 max-w-[670px] mx-auto flex gap-2'>
        <button className='mt-24 bg-slate-200 py-1 px-4 rounded-md'
        onClick={() => navigation(-1)}
        >
            {"<-"}Back
        </button>
        <h2 className='mt-24 bg-slate-100 py-1 px-4'> 
            Blogs on <span className='italic font-bold'>{category}</span>
        </h2>
      </div>
      <div className='-mt-10'>
      <Blogs/>
      </div>
      <Pagination/>
    </div>
  )
}

export default CategoryPage
