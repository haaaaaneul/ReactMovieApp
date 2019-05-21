import React, { Component  } from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';

function Movie ({title, poster, genres, synopsis}) {
    return ( 
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title} />
            </div>   
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />   
                </div>
            </div>
        </div>
    )
    
}

function MovieGenre( {genre}) {
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}

function MoviePoster({poster, alt}) {
    return (
        //alt -> 이미지에 마우스를 가져갔을때(hover) alt가 뜸
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}

Movie.propTypes = {
     //부모 컴포넌트에서 받는 정보의 타입, 있는지 없는지 체크 가능
    title : PropTypes.string.isRequired, //string값을 가져야 한다 ? string만 출력? --> 참이 아니면 오류메세지 출력
    poster : PropTypes.string.isRequired, //isRequired라고 작성하면 movie컴포넌트는 poster라는 prop 제공하는 것이 필수로 설정 됨 --> 참이 아니면 오류 메세지
    genres : PropTypes.array.isRequired,
    synopsis : PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre : PropTypes.string.isRequired
}

export default Movie;