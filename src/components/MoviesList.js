import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Movie from './Movie';


class MoviesList extends Component {

  state = {
    movies: [],
    page_num: 1,
    total_pages: null
  }

  async componentDidMount() {
    try {

      const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=10407bb80edfaff3e296f3d3149efcdd&page=${this.state.page_num}`);
      const movies = await res.json();

      this.setState({
        movies: movies.results,
        total_pages: movies.total_pages,
        page_num: movies.page
      })
    } 
    catch(e) {
      console.log(e);
    }
  }

  prevPage = () => {
    if (this.state.movies && this.state.page_num !== 1) {
      this.setState({
        page_num: this.state.page_num -=1
      }, () => this.componentDidMount())
      
    }
  }

  nextPage = () => {
    if (this.state.movies && this.state.page_num < this.state.total_pages) {
      this.setState({
        page_num: this.state.page_num +=1
      }, () => this.componentDidMount())
    }
  }

  render() {
  return (
    <MovieGrid>
    <div className="catalog">
      <div className="container">
        <div className="row">
        <div className="col-12">
					<h1 className="home__title"><b>TRENDING</b> THIS WEEK</h1>
				</div>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
          {/* paginator */}
          <div className="col-12">
            <ul className="paginator">
              <li className="paginator__item paginator__item--prev">
                <Link to="#" onClick={this.prevPage}><i className="icon ion-ios-arrow-back"></i></Link>
              </li>
              <li className="paginator__item paginator__item--active"><Link to="#">{this.state.page_num}</Link></li>
              <li className="paginator__item paginator__item--next">
                <Link to="#" onClick={this.nextPage}><i className="icon ion-ios-arrow-forward"></i></Link>
              </li>
            </ul>
          </div>
          {/* end paginator */}
        </div>
      </div>
    </div>
    </MovieGrid>
    );
  }
}

export default MoviesList;

const MovieGrid = styled.div`
    padding: 10rem 0;
`;