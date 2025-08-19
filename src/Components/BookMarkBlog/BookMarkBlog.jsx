

const BookMarkBlog = ({bookmarkBlog, removeItem}) => {
   const {title, id} = bookmarkBlog
  
    return (
        <div>
           <div className="bg-white md:p-4 p-3  m-6 rounded-lg font-semibold flex justify-between items-center">
                <h1 className="text-xs">{title}</h1>
                <button onClick={()=>removeItem(id)}><img  className="w-6" src="/src/assets/images/free-icon-garbage-bin-10420.png" alt="" /></button>
            </div>
        </div>
    );
};

export default BookMarkBlog;