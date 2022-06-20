import { useState, useEffect } from 'react';
import BlogList from './BlogList';
const Home = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
            })
    },[]);

    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All titles!" setBlogs={setBlogs}/>}
        </div>
    );
}
 
export default Home;