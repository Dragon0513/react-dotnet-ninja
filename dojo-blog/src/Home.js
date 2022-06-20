import { useState } from 'react';
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "my first blog", body: "lorem ipsum...", author: "Mario", id: 1},
        {title: "my web site", body: "lorem ipsum...", author: "Luigi", id: 2},
        {title: "New game", body: "lorem ipsum...", author: "Wario", id: 3}
    ])
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={ blog.id }>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;