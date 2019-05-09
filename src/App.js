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
/*
  componentWillMount() {
    console.log('will mount'); //api 작업 요청, 사이클 시작
  }
*/

//컴포넌트 안에 state가 바뀔 때 마다, render 작동
  componentDidMount() {
  //  console.log('did mount'); //데어터 관련 작업, 컴포넌트 자리잡았음
    setTimeout(() => {
      //state는 직접적으로 쓰면 안됨, this.state.~ = ~~ (X) , 직접접으로 변경하면 render 설정들이 작동 안함
      this.setState({
        greeting : 'Hello again' //컴포넌트가 mount 할 때마다, greeting을 Hello --> Hello again으로 변경함 
        //greeting 렌더링을 setState에서 함
      })
    }, 5000)
  }


  state = {
    greeting: 'Hello!'
  }

  render() {
   /* console.log('did render'); //컴포넌트 존재 */

    return (
      <div className="App">
        {this.state.greeting}
        {movies.map((movie, index) => { //리스트
          return <Movie title={movie.title} poster={movie.poster} key={index}/> //movies array를 가져다가 맵핑해서 새로운 array를 만듬
        })}
      </div>
    );
  }
}

/* Render : componentWillMount() -> render() -> componentDidMount()
  will mount, render, did mount 3가지는 component가 존재하기 시작할때 작동 함 */

  /* Update : componentWillReceiveProps() -> shouldComponentUpdate() 이전props과 새로운 props가 다르면 == true-> componentWillUpdate() -> render() -> componentDidUpdate()
  willUpdate()때 spinner(로딩중)를 붙이고 업데이트 이후 DidUpdate()에서 메세지나 아이콘을 숨김 */


export default App;
