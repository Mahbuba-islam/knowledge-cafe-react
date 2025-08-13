import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import BookMarkBlog from "../BookmarkBlog/BookMarkBlog";
const Blogs = () => {
    const [blogs, setBlogs] = useState([])
     const [bookmarkBlogs, setBookMarkBlogs] = useState([])

    const handleBookMark = (blog) => {
      const newAdded = [...bookmarkBlogs, blog]
       setBookMarkBlogs(newAdded)
    }

    useEffect(()=> {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data.items))
    },[])
    return (
        <div className="container mx-auto flex md:gap-12 gap-8 ">
            <hr />
            <div>
          {
            blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookMark={handleBookMark}></Blog>)
          }
            </div>

           
              <div className="my-10 flex-1 text-sm ">
                <h1 className="text-blue-600 bg-blue-100 font-bold p-4 rounded-md text-xl text-center">spent time on read</h1>

            
             <div className="bg-gray-300 mt-4 rounded-md py-4">
              <h1 className="text-center font-semibold">BookMarked Blogs : {bookmarkBlogs.length}</h1>
              {
                bookmarkBlogs.map(bookmarkBlog =>  <BookMarkBlog bookmarkBlog={bookmarkBlog}></BookMarkBlog>)
              }
             
              </div> 
            </div>
 </div>
        
    );
};

export default Blogs;