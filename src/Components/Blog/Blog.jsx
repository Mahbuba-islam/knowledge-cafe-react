const Blog = ({ blog, handleBookMark, handleReadMark }) => {
  const { blogImage, readingTime, title, author, tags, date, id } = blog;

  return (
    <div className="my-10 pb-5 md:flex">
      <div className="space-y-4 w-[120px] md:w-[780px]">
        {/* Blog Image */}
        <img className="w-full" src={blogImage} alt={title} />

        {/* Author & Reading Info */}
        <div className="mt-4 space-y-2 md:flex justify-between items-center">
          {/* Author Info */}
          <div className="flex gap-2 items-center">
            <img
              className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] rounded-full object-cover"
              src={author.image}
              alt={author.name}
            />
            <div className="text-xs md:text-sm">
              <h6>{author.name}</h6>
              <p>{date}</p>
            </div>
          </div>

          {/* Reading Time & Bookmark */}
          <div className="flex items-center space-x-2 text-xs md:text-sm">
            <p className="my-8">{readingTime}</p>
            <img
              onClick={() => handleBookMark(blog)}
              className="w-6 cursor-pointer"
              src="/Bookmark-Black-Icon.png"
              alt="Bookmark"
            />
          </div>
        </div>

        {/* Title, Tags, and Read Button */}
        <div className="space-y-2">
          <h1 className="text-xs md:text-xl font-bold">{title}</h1>
          <div className="flex flex-wrap gap-2 text-sm font-bold text-gray-500">
            {tags.map((tag, index) => (
              <p key={index}>#{tag}</p>
            ))}
          </div>
          <button
            onClick={() => handleReadMark(readingTime, id)}
            className="text-blue-600 underline"
          >
            Mark as read
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;