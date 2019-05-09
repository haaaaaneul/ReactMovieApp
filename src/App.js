import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'



const movies = [
  {
    title : "Marix",
    poster : "https://s3-ap-southeast-2.amazonaws.com/fna-wordpress-website06/wp-content/uploads/2018/09/05151327/Matrix-The-960x1440.jpg"
  },
  {
    title : "Full Metal Jacket",
    poster : "https://cdn.shopify.com/s/files/1/0784/1125/products/Full_Metal_Jacket_1024x.jpg?v=1530145558"
  },
  {
    title : "Oldboy",
    poster : "https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg"
  },
  {
    title : "Star Wars",
    poster : "https://lumiere-a.akamaihd.net/v1/images/uk_sws-9_teaser-poster_r_b34b20e7.jpeg?region=0,0,960,1420"
  }
]

class App extends Component{
  render() {
    return (
      <div className="App">
        {movies.map(movie => { //리스트
          return <Movie title={movie.title} poster={movie.poster} /> //movies array를 가져다가 맵핑해서 새로운 array를 만듬
        })}
      </div>
    );
  }
}

export default App;
