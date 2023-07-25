import React, { useContext } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import { baseUrl } from '../baseUrl';

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const[relatedblogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading, loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        console.log("URL is: ");
        console.log(url);
        try {
            const res = await fetch(url);
            const data = await res.json();
            
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error) {
            console.log("Error aagya in blog id wali call");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect( () => {
        if(blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname] )

  return (
    <div>
      <Header/>
      <div className='w-11/12 max-w-[670px] mx-auto'>
        <button className='mt-24 bg-slate-200 py-1 px-4 rounded-md'
        onClick={() => navigation(-1)}
        >
            Back
        </button>
      </div>
      {
        loading ?
        (<div className="min-h-[80vh] w-full flex justify-center items-center">
            <p className="text-center font-bold text-3xl">Loading</p>
        </div>) :
        blog ?
        (<div className='w-11/12 max-w-[670px] mx-auto'>
            <BlogDetails post={blog} />
            <div className='bg-black h-[1px] mt-8'></div>
            <h2 className='font-bold text-2xl mt-2'> Related Blogs </h2>
            
            {
                relatedblogs.map( (post) => (
                    <div key = {post.id} className='-mt-10'>
                        <BlogDetails post={post} />
                    </div>
                ) )
            }

        </div>) :
        (<div className="min-h-[80vh] w-full flex justify-center items-center">
            <p className="text-center font-bold text-3xl">No Blog Found</p>
        </div>)
       
      }


    </div>
  )
}

export default BlogPage
