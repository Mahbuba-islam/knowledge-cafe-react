

const Blog = ({blog}) => {
    const {blogImage, readingTime, title, author, tags, url, excerpt,date, isBookmarked} = blog
    console.log(blog)
    return (
        <div>
            <div>
                <img className = 'w-[780px]'  src={blogImage} alt="" />
                <div className="mt-4 flex justify-between items-center">
                 <div className="flex justify-start gap-4 items-center">
                    <img className = 'w-[50px] h-[50px] rounded-full object-cover' src={author.image} alt="" />
                    <div>
                      <h6>{author.name}</h6>
                      <p>{date}</p>
                    </div>
                    
                </div>
                <div className="flex  items-center gap-2">
                    <h6>{readingTime}</h6>
                    <p>{isBookmarked} <img className="w-[20px]" src="/src/assets/images/Bookmark Black Icon .png" alt="" /></p>
                </div>
                </div>

                <div>
                    <h1>{title}</h1>
                    {/* <p>{tags}</p> */}
                </div>
                
            </div>
        </div>
    );
};

export default Blog;