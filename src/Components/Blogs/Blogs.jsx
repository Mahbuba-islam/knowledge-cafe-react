import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import BookMarkBlog from "../BookMarkBlog/BookMarkBlog";
import { addItemInLs, getItemFromLs, removeItemFromLS } from "../../utility/utility";
const Blogs = () => {
    const [blogs, setBlogs] = useState([])
     const [bookmarkBlogs, setBookMarkBlogs] = useState([])
    const [readTime, setReadTime] = useState(0)
    
    const handleBookMark = (blog) => {
      if(!bookmarkBlogs.includes(blog)){
       const newAdded = [...bookmarkBlogs, blog]
       setBookMarkBlogs(newAdded)
       addItemInLs(blog.id)
      }
      
    }
   

    const totalReadTime = (bookMarkBlogs) => {
      let total = 0
     bookMarkBlogs.map(bookmarkBlog => {
      const readingTimeNumber = parseInt(bookmarkBlog.readingTime.match(/\d+/)?.[0] || 0)
       total += readingTimeNumber
     })
     setReadTime(total)
    }
    
   useEffect(()=> {
    totalReadTime(bookmarkBlogs)
   } ,[bookmarkBlogs])


    useEffect(()=> {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data.items))
        
    },[])

   
    
    useEffect(()=>{
      const ids = getItemFromLs()
      const bookmarkList = blogs.filter(blog => ids.includes(blog.id))
        setBookMarkBlogs(bookmarkList)
       },[blogs])


      //  remove bookmark item from list
     
   const removeItem = (id) => {
    const remaining = bookmarkBlogs.filter(item => item.id !== id)
    setBookMarkBlogs(remaining)
    removeItemFromLS(id)
   }

    return (
        <div className="container mx-auto flex md:gap-12 gap-8 ">
            <hr />
            <div>
          {
            blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookMark={handleBookMark}></Blog>)
          }
            </div>

           
              <div className="my-10 flex-1 text-sm ">
                <h1 className="text-blue-600 bg-blue-100 font-bold p-4 rounded-md text-xl text-center">spent time on read: {readTime} min</h1>

            
             <div className="bg-gray-300 mt-4 rounded-md py-4">
              <h1 className="text-center font-semibold">BookMarked Blogs : {bookmarkBlogs.length}</h1>
              {
                bookmarkBlogs.map(bookmarkBlog =>  <BookMarkBlog bookmarkBlog={bookmarkBlog} removeItem={removeItem}></BookMarkBlog>
                  
                )
              }
             
              </div> 
            </div>
 </div>
        
    );
};

export default Blogs;