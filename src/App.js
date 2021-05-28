
import './App.css';
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  //declare some usestates
  const [movie, setMovie] = useState([])


  useEffect(() => {
    axios({
      url: 'http://www.omdbapi.com/?i=tt3896198&apikey=f17b837b',
      method: 'GET',
      responseType: 'json',
      params: {
        s: '',
      },
    }).then((res) => {
      //i'm  off creating a react app in my VS code to do testing
      const movieData = res.data
      setMovie(movieData)
    })
  }, [])

  console.log(movie);


  return (
    <div className="App">
      <div className="TVOApp">
     
        <header>
        <h1>TVO Test</h1>
        </header>
        <body className="Wrapper">
        <div className="Cards">
          <div className="MovieInfo">
          <p>{movie.Title}</p>
          <p>{movie.Year}</p>
          <p>{movie.Rated}</p>
          <p>{movie.Plot}</p>
          </div>

        </div>
      </body>
      </div>
    </div>
  );
}

export default App;
