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
      addItemInLs(blog.id, 'bookmark');
    } else {
      toast.warning('Already added');
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
      addTimeInLs(readingTimeNumber); // Save to localStorage
    } else {
      toast.warning("Already marked as read!");
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
  const removeItem = (id) => {
    const remaining = bookmarkBlogs.filter(item => item.id !== id);
    setBookMarkBlogs(remaining);
    removeItemFromLS(id, 'bookmark');
  };

  return (
    <div className="container mx-auto flex md:gap-12 gap-8">
      <div>
        {blogs.map(blog => (
          <Blog
            key={blog.id}
            blog={blog}
            handleBookMark={handleBookMark}
            handleReadMark={handleReadMark}
          />
        ))}
      </div>

      <div className="my-10 flex-1 text-sm">
        <h1 className="text-blue-600 bg-blue-100 font-bold p-4 rounded-md text-xl text-center">
          Spent time on read: {readTime} min
        </h1>

        <div className="bg-gray-300 mt-4 rounded-md py-4">
          <h1 className="text-center font-semibold">
            BookMarked Blogs: {bookmarkBlogs.length}
          </h1>
          {bookmarkBlogs.map(bookmarkBlog => (
            <BookMarkBlog
              key={bookmarkBlog.id}
              bookmarkBlog={bookmarkBlog}
              removeItem={removeItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;