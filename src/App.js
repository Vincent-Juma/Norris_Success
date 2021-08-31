import React, { useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  
    useEffect (async() => {
      const jokes = await axios.get("https://api.chucknorris.io/jokes/categories");
      console.log(jokes.data);
    }, [])

    return (
    <div>
      <h1>Welcome for the chuck demo</h1>
    </div>
  );
}

export default App;
