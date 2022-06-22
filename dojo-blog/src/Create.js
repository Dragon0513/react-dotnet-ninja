import { useState } from 'react';
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isPending, setIsPending] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        
        setIsPending(true);

        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added");
            setIsPending(false);
        })
    }
    return (
        <div className="create">
            <h2>Create a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Body:</label>
                <input 
                    type="text"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                    <option value="Luigi">Luigi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog ...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    );
}
 
export default Create;