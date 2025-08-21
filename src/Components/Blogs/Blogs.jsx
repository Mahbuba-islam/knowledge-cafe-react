import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import BookMarkBlog from "../BookMarkBlog/BookMarkBlog";

import {
  addItemInLs,
  addTimeInLs,
  getItemFromLs,
  getReadTimeFromLs,
  removeItemFromLS
} from "../../utility/utility";
import { toast } from 'react-toastify';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmarkBlogs, setBookMarkBlogs] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const [readMarks, setReadMarks] = useState([]);

  // 📌 Bookmark handler
  const handleBookMark = (blog) => {
    if (!bookmarkBlogs.includes(blog)) {
      const updatedBookmarks = [...bookmarkBlogs, blog];
      setBookMarkBlogs(updatedBookmarks);
     toast.success('✨ Added to your reading list!');
      addItemInLs(blog.id, 'bookmark');
    } else {
      toast.warning('📌 This blog is already in your bookmarks.');

    }
  };

  // 📘 Read time handler
  const handleReadMark = (readingTime, blogId) => {
    if (!readMarks.includes(blogId)) {
      const readingTimeNumber = parseInt(readingTime.match(/\d+/)[0]);
      const updatedReadMarks = [...readMarks, blogId];
      setReadMarks(updatedReadMarks);

      const updatedTotalTime = readTime + readingTimeNumber;
      setReadTime(updatedTotalTime);
     toast.success(`Marked as read ✅ Added ${readingTimeNumber} min to total`);

      addTimeInLs(readingTimeNumber); // Save to localStorage
    } 
    else{
     toast.warning("⚠️ You've already read this blog!");
    }
    
  };

  // ⏱️ Load read time from localStorage
  useEffect(() => {
    const storedTime = getReadTimeFromLs('readTime');
    setReadTime(storedTime);
  }, []);

  // 📥 Load blogs from JSON
  useEffect(() => {
    fetch('blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data.items));
  }, []);

  // 📌 Sync bookmarks from localStorage
  useEffect(() => {
    const ids = getItemFromLs('bookmark');
    const bookmarkList = blogs.filter(blog => ids.includes(blog.id));
    setBookMarkBlogs(bookmarkList);
  }, [blogs]);

  // ❌ Remove bookmark
  const deleteItem = (id) => {
  const remaining = bookmarkBlogs.filter(item => item.id !== id);
    setBookMarkBlogs(remaining);
    removeItemFromLS(id, 'bookmark');
  };

const removeItemToast = (id) => {
toast(({ closeToast }) => (
  <div className="p-4">
    <h1 className="text-sm text-gray-800">Are you sure?</h1>
    <div className="mt-3 flex gap-2">
      <button
        className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition"
        onClick={() => {
          deleteItem(id);
          closeToast();
        }}
      >
        Yes
      </button>
      <button
        className="px-3 py-1 text-sm bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
        onClick={closeToast}
      >
        No
      </button>
    </div>
  </div>
), {
  autoClose: false,
  closeOnClick: false,
  draggable: false,
  position: 'top-center',
});

}


// handle reset
const handleReset = () => {
  setReadTime(0)
  localStorage.removeItem('readTime')
}


  return (
    <div className="container mx-auto flex md:gap-12 gap-8">
      <div>
        {blogs.map(blog => (
          <Blog
            key={blog.id}
            blog={blog}
            handleBookMark={handleBookMark}
            handleReadMark={handleReadMark}
            readMarks = {readMarks}
            bookmarkBlogs = {bookmarkBlogs}
          />
        ))}
      </div>

      <div className="my-10 flex-1 text-sm">
       <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-md shadow-sm flex items-center justify-between">
  <div className="flex items-center gap-2">
    <span className="text-lg font-semibold">🕒 Total Reading Time:</span>
    <span className="text-xl font-bold">{readTime} min</span>
  </div>
  <button onClick={()=> handleReset(readTime)}
   
    className="text-sm text-red-500 hover:underline font-bold"
  >
      🔄 Reset 

  </button>
</div>

        <div className="bg-gray-300 mt-4 rounded-md py-4">
          <h1 className="text-center font-semibold">
            BookMarked Blogs: {bookmarkBlogs.length}
          </h1>
          {bookmarkBlogs.map(bookmarkBlog => (
            <BookMarkBlog
              key={bookmarkBlog.id}
              bookmarkBlog={bookmarkBlog}
              removeItemToast={removeItemToast}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;