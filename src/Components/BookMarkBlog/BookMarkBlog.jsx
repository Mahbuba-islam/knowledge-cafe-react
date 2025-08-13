
const BookMarkBlog = ({bookmarkBlog}) => {
   const {title} = bookmarkBlog
    return (
        <div>
            <div className="bg-white md:p-4 p-3  m-6 rounded-lg font-semibold">
                <h1 className="text-xs">{title}</h1>
            </div>
        </div>
    );
};

export default BookMarkBlog;