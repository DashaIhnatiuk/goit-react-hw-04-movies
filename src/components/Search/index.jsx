import React, { Component } from 'react';
import * as api from '../../api/movies-api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from '../Searchbar';
import MoviesList from '../MoviesList';
import MyLoader from '../Loader';

export default class SearchMovie extends Component {
  state = {
    movies: [],
    page: 1,
    isLoading: false,
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search).get('query');
    if (query) {
      this.fetchMovies(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = new URLSearchParams(prevProps.location.search).get(
      'query',
    );
    const nextQuery = new URLSearchParams(this.props.location.search).get(
      'query',
    );

    if (prevQuery === nextQuery) {
      return;
    }

    this.fetchMovies(nextQuery);
  }
  fetchMovies = query => {
    this.setState({ isLoading: true });
    api
      .searchMovies(query)
      .then(({ results }) => {
        this.setState({
          movies: results,
        });
      })
      .catch(error => toast.error('Побробуйте снова'))
      .finally(() => this.setState({ isLoading: false }));
  };

  setSearchQuery = searchQuery => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${searchQuery}`,
    });
    this.setState({ movies: [], loading: true });
  };

  render() {
    const { movies, isLoading } = this.state;

    return (
      <>
        <Searchbar onSearch={this.setSearchQuery} />
        {isLoading && <MyLoader />}
        {movies.length > 0 && <MoviesList movies={movies} />}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
