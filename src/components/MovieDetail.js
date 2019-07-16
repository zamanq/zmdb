import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Poster } from "./Movie";
import Overdrive from "react-overdrive";
import ReactPlayer from "react-player";

const POSTER_PATH = "http://image.tmdb.org/t/p/w500";
//const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';
const PRODUCTION_PATH = "http://image.tmdb.org/t/p/w45";

class MovieDetail extends Component {
  state = {
    movie: {},
    trailer: {},
    genres: [],
    countries: [],
    productionCompanies: []
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }?api_key=10407bb80edfaff3e296f3d3149efcdd&language=en-US`
      );
      const res_trailer = await fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }/videos?api_key=10407bb80edfaff3e296f3d3149efcdd&language=en-US`
      );
      const movie = await res.json();
      const trailer = await res_trailer.json();

      this.setState({
        movie: movie,
        trailer: trailer.results["0"],
        genres: movie.genres.map(genre => <li>{genre.name} </li>),
        countries: movie.production_countries.map(country => (
          <Link to="#">{country.iso_3166_1}</Link>
        )),
        productionCompanies: movie.production_companies.map(production => (
          <img src={`${PRODUCTION_PATH}${production.logo_path}`} alt="" />
        ))
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const {
      movie,
      trailer,
      genres,
      countries,
      productionCompanies
    } = this.state;
    return (
      <section className="section details">
        {/* details content */}
        <div className="container">
          <div className="row">
            {/* title */}
            <div className="col-12">
              <h1 className="details__title">{movie.title}</h1>
            </div>
            {/* end title */}

            {/* content */}
            <div className="col-12 col-xl-6">
              <div className="card card--details">
                <div className="row">
                  {/* card cover */}
                  <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-5">
                    <div className="card__cover">
                      <Overdrive id={movie.id}>
                        <Poster
                          src={`${POSTER_PATH}${movie.poster_path}`}
                          alt={movie.title}
                        />
                      </Overdrive>
                    </div>
                  </div>
                  {/* end card cover */}

                  {/* card content */}
                  <div className="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-7">
                    <div className="card__content">
                      <div className="card__wrap">
                        <span className="card__rate">
                          <i className="icon ion-ios-star" />
                          {movie.vote_average}
                        </span>
                      </div>

                      <ul className="card__meta">
                        <li>
                          <span>Genres:</span>
                          <ul className="card__list">{genres}</ul>
                        </li>
                        <li>
                          <span>Release date:</span> {movie.release_date}
                        </li>
                        <li>
                          <span>Status:</span> {movie.status}
                        </li>
                        <li>
                          <span>Running time:</span> {movie.runtime} mins
                        </li>
                        <li>
                          <span>Country:</span> {countries}{" "}
                        </li>
                        <li>
                          <span>Produced by: {productionCompanies}</span>{" "}
                        </li>
                      </ul>

                      <div className="card__description card__description--details">
                        {movie.overview}
                      </div>
                    </div>
                  </div>
                  {/* end card content */}
                </div>
              </div>
            </div>
            {/* end content */}

            {/* player */}
            <div className="col-12 col-xl-6">
              <ReactPlayer
                url={
                  trailer.key === undefined
                    ? `https://www.youtube.com/watch?v=ScMzIvxBSi4`
                    : `https://youtube.com/watch?v=${trailer.key}`
                }
                controls={true}
              />
            </div>
            {/* end player */}
          </div>
        </div>
        {/* end details content */}
      </section>
    );
  }
}

export default MovieDetail;
