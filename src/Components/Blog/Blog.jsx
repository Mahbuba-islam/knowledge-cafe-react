const Blog = ({ blog, handleBookMark, handleReadMark, readMarks, bookmarkBlogs }) => {
  const { blogImage, readingTime, title, author, tags, date, id } = blog;
  const isBookMarked = bookmarkBlogs.some(bookmarkBlog => bookmarkBlog.id === id);
  const isAlreadyRead = readMarks.includes(id);

  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden my-10">
      {/* Blog Image */}
      <img
        src={blogImage}
        alt={title}
        className="w-full h-64 object-cover md:h-80"
      />

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Author & Meta */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Author Info */}
          <div className="flex items-center gap-3">
            <img
              src={author.image}
              alt={`Author: ${author.name}`}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-gray-300"
            />
            <div className="text-sm text-gray-700">
              <h6 className="font-semibold">{author.name}</h6>
              <p className="text-xs text-gray-500">{date}</p>
            </div>
          </div>

          {/* Reading Time & Bookmark */}
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <p className="font-medium">{readingTime}</p>
            {isBookMarked ? (
              <span
                onClick={() => handleBookMark(blog)}
                className="text-blue-500 cursor-pointer hover:underline"
                title="Remove bookmark"
              >
                🔖 Bookmarked
              </span>
            ) : (
              <img
                onClick={() => handleBookMark(blog)}
                src="/Bookmark-Black-Icon.png"
                alt="Bookmark"
                title="Add to bookmarks"
                className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
              />
            )}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
          {title}
        </h2>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Read Button */}
        <div>
          <button
            onClick={() => handleReadMark(readingTime, id)}
            disabled={isAlreadyRead}
            className={`text-sm font-medium underline transition-colors duration-300 ${
              isAlreadyRead
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-blue-600 hover:text-blue-800'
            }`}
          >
            {isAlreadyRead ? '✅ Already read' : '📖 Mark as read'}
          </button>
        </div>
      </div>
    </article>
  );
};

export default Blog;