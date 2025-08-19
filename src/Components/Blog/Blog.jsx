

const Blog = ({blog, handleBookMark, handleReadingTime}) => {
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
                <div className="flex md:text-sm text-xs items-center space-y-2 space-x-2 ">
                    <button onClick={()=> handleReadingTime(readingTime)} className="">{readingTime}</button>
                    <img onClick={()=> handleBookMark(blog)} className="w-6" src="/src/assets/images/Bookmark Black Icon .png" alt="" />
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