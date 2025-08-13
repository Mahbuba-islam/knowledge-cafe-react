import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=> {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data.items))
    },[])
    return (
        <div className="container mx-auto">
            <hr />
            <div>
          {
            blogs.map(blog => <Blog blog={blog}></Blog>)
          }
            </div>
        </div>
    );
};

export default Blogs;