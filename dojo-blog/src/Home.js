import { useState } from 'react';
const Home = () => {
    //let name = 'Mario';
    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(23);
    const handleClick = () => {
        setName('Luigi');
        setAge(37);
    }
    
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
 
export default Home;