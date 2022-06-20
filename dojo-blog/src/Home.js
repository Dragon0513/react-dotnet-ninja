import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "my first blog", body: "lorem ipsum...", author: "Mario", id: 1},
        {title: "my web site", body: "lorem ipsum...", author: "Luigi", id: 2},
        {title: "New game", body: "lorem ipsum...", author: "Wario", id: 3}
    ])
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All titles!" setBlogs={setBlogs}/>
        </div>
    );
}
 
export default Home;