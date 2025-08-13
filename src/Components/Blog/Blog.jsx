

const Blog = ({blog, handleBookMark}) => {
    const {blogImage, readingTime, title, author, tags, url, excerpt,date, isBookmarked} = blog
    console.log(blog)
    return (
        <div className="my-10 md:flex pb-5">
            <div className="md:w-[780px] space-y-4 w-[120px]">
                <img className = 'w-full'  src={blogImage} alt="" />
                <div className="mt-4 md:flex justify-between items-center space-y-2">
                 <div className="md:flex justify-start gap-2 items-center">
                    <img className = 'md:w-[50px] md:h-[50px] rounded-full object-cover w-[30px] h-[30px]' src={author.image} alt="" />
                    <div className="md:text-sm ">
                      <h6 className="text-xs">{author.name}</h6>
                      <p className="text-xs">{date}</p>
                    </div>
                    
                </div>
                <div className="md:flex items-center gap-2 md:text-sm text-xs space-y-2">
                    <h6 className="text-xs">{readingTime}</h6>
                    <button onClick={()=> handleBookMark(blog)}><img  className="w-[20px]" src="/src/assets/images/Bookmark Black Icon .png" alt="" /></button>
                </div>
                </div>

                <div>
                    <h1 className="md:text-xl font-bold text-xs">{title}</h1>
                    <div className="md:flex gap-2 items-center text-sm text-gray-500 font-bold">
                     {tags.map(tag => <p>#{tag}</p> )
                        }
                    </div>
                   
                </div>
                
            </div>

            
        </div>
    );
};

export default Blog;