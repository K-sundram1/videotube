import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((res) => {
        setJokes(res.data);
      })
      .catch((e) => {
        console.log("Something went wrong", e);
      });
  }, []); // Dependency array is empty to ensure this runs only once when the component mounts.

  return (
    <div>
      <h1>Chai and Jokes</h1>
      {
        jokes.map((joke) => (
          <div key={joke.id}>
            <h2>{joke.id}</h2>
            <h3>{joke.title}</h3>
            <p>{joke.joke}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
