//const BlogList = (props) => {
    //const blogs = props.blogs;
    //const title = props.title;
const BlogList = ({blogs,title,setBlogs}) => {
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    return ( 
        <div className="BlogList">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={ blog.id }>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;