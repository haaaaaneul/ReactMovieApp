import React, { Component  } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

class Movie extends Component{


static propTypes = {
    title : PropTypes.string.isRequired, //string값을 가져야 한다 ? string만 출력? --> 참이 아니면 오류메세지 출력
    poster : PropTypes.string.isRequired //isRequired라고 작성하면 movie컴포넌트는 poster라는 prop 제공하는 것이 필수로 설정 됨 --> 참이 아니면 오류 메세지
    //부모 컴포넌트에서 받는 정보의 타입, 있는지 없는지 체크 가능

}

    render() {
       // console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <MoviePoster poster={this.props.poster}/>
             </div>
        )
    }
}

class MoviePoster extends Component{

    static propTypes = {
        poster : PropTypes.string.isRequired //부모 컴포넌트에게 받는 정보 체크
    }

    render() {
        console.log(this.props);
        return(
            <img src={this.props.poster} />
        )
    }
}

export default Movie;