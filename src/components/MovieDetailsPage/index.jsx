import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as api from '../../api/movies-api';
import MovieCard from '../MovieCard';
import MyLoader from '../Loader';
import s from '../MovieCard/MovieCard.module.css';
import routes from '../../routes';

const MoviesCast = lazy(() =>
  import(
    '../Cast'),
);

const MoviesReviews = lazy(() =>
  import(
    '../Reviews'),
);

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const { movieId } = this.props.match.params;
    const response = await api
      .getMovieDetales(movieId)
      .catch(error => toast.error(error))
      .finally(() => this.setState({ isLoading: false }));
    this.setState({ movie: response });
  }

  // handleGoBack = () => this.props.history.goBack();
  handleGoBack = () => {
    const { history } = this.props;
    history.push(this.props.location?.state?.from || routes.home);
  };

  render() {
    const { movie, isLoading } = this.state;
    return (
      <>
        {isLoading && <MyLoader />}
        {movie && (
          <div className={s.wrapper}>
            <div className={s.titleBox}>
              <h1 className={s.movieName}>{movie.title}</h1>
              <button
                className={s.goBack}
                type="button"
                onClick={this.handleGoBack}
              >
                <span>&#8592;</span>Go back
              </button>
            </div>

            <div className={s.iner}>
              <MovieCard movie={movie} />
            </div>
            <Suspense fallback={<MyLoader />}>
              <Switch>
                <Route path={`${routes.movieId}/cast`} component={MoviesCast} />
                <Route
                  path={`${routes.movieId}/reviews`}
                  component={MoviesReviews}
                />
              </Switch>
            </Suspense>
          </div>
        )}
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
