import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';






class App extends Component{

  state = {};
/*
  componentWillMount() {
    console.log('will mount'); //api 작업 요청, 사이클 시작
  }
*/

//컴포넌트 안에 state가 바뀔 때 마다, render 작동
  componentDidMount() {
  //  console.log('did mount'); //데어터 관련 작업, 컴포넌트 자리잡았음
    
    /*time out : 00시간후에 xx작업을 수행시킨다는 뜻
      fn(function),00초 라고 작성하면 00초 후에 페이지가 로드하고 fn작업이 시작
    setTimeout(() => { 
      //state는 직접적으로 쓰면 안됨, this.state.~ = ~~ (X) , 직접접으로 변경하면 render 설정들이 작동 안함
      this.setState({ 
        greeting : 'Hello again' //컴포넌트가 mount 할 때마다, greeting을 Hello --> Hello again으로 변경함 
        //greeting 렌더링을 setState에서 함
      })
    }, 5000)*/

    /*
    setTimeout(() => {
      this.setState({
        movies : [
  //        ...this.state.movies, // 이전 영화 리스트를 그대로 두고 한개 영화를 추가하라는 뜻임, 이 줄 지우면 오초뒤에 다 사라지고 추가한거만 생김(전체리스트를 대체) 
          
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
        }, 
        {
          title : "Transpotting",
          poster : "https://lumiere-a.akamaihd.net/v1/images/uk_sws-9_teaser-poster_r_b34b20e7.jpeg?region=0,0,960,1420"
        }
        
 
      })
    }, 5000)
    */

    //컴포넌트가 mount되면 url을 가서 fetch해옴
    //ajax는 url을 자바스크립트로 asynchronous(비동기화)방법으로 불러옴
    //fetch, promise를 사용하면 시나리오가 생기고 이를 관리할 수 있음
    //fetch는 url을 ajax로 불러올 수 있음
    
    this._getMovies();
  }

  _renderMovies = () => { //맵핑 
      const movies  = this.state.movies.map(movie => { 
          console.log(movie)
          return (
          <Movie 
            title={movie.title_english} 
            poster={movie.medium_cover_image} 
            key={movie.id} 
            genres={movie.genres}
            synopsis={movie.synopsis}
          />
          );
        });

        return movies;
  };

  _getMovies = async () => {
    const movies = await this._callApi()
    //await으로 하는 것은 call api 가능이 끝나는것을 기다리고 return value를 set함
    this.setState({ //call api 작업이 완료되기 전 까지는 실행되지 X
      movies 
    }); // state 안에 movies가 있으면, render movies라는 function을 불러 옴 
  };

  _callApi = () => { //fetch promise를 return
   return fetch(
      "https://yts.am/api/v2/list_movies.json?sort_by=download_count"
   )
    .then(response => response.json()) //fethch의 결과물
    .then(json => json.data.movies) //return, (=>)는 return 작성할 필요X, 화살표 기능 자체에 return 이라는 뜻이 내재되어 있음
    .catch(err => console.log(err))
  };


  render() {
   /* console.log('did render'); //컴포넌트 존재 */

   const {movies} = this.state;

    return (
      /*
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie, index) => { //리스트
          return <Movie title={movie.title} poster={movie.poster} key={index}/> //movies array를 가져다가 맵핑해서 새로운 array를 만듬
        })}
      </div>
      */
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading...'}
      </div>
    );

  }
}


/* Render : componentWillMount() -> render() -> componentDidMount()
  will mount, render, did mount 3가지는 component가 존재하기 시작할때 작동 함 */

  /* Update : componentWillReceiveProps() -> shouldComponentUpdate() 이전props과 새로운 props가 다르면 == true-> componentWillUpdate() -> render() -> componentDidUpdate()
  willUpdate()때 spinner(로딩중)를 붙이고 업데이트 이후 DidUpdate()에서 메세지나 아이콘을 숨김 */


export default App;
