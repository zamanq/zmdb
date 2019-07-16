import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w342';

const Movie = ({movie}) => (
    <div className="col-6 col-sm-4 col-lg-3 col-xl-3">
        {/* card */}
        <div className="card">
            <div className="card__cover">
                <Overdrive id={movie.id}>
                    <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
                </Overdrive>
                <Link to={`/${movie.id}/${movie.title}`} className="card__play">
                    <i className="icon ion-ios-play"></i>
                </Link>
            </div>
            <div className="card__content">
                <h3 className="card__title"><Link to={`/${movie.id}/${movie.title}`}>{movie.title}</Link></h3>
               
                <span className="card__rate"><i className="icon ion-ios-star"></i>{movie.vote_average}</span>
            </div>
        </div>
        {/* end card */}
    </div> 
);

export default Movie;

Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
};
 

export const Poster = styled.img`
    box-shadow: 0 0 15px rgba(0, 0, 0, .3);
`;

