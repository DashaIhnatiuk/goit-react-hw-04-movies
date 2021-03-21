import React from 'react';
import MoviesPreview from '../MoviesPreview';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../../routes';
import * as api from '../../api/movies-api';
import s from './MoviesList.module.css';
import empty from '../../images/empty.png';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={s.list}>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id} className={s.item}>
          <Link
            className={s.link}
            to={{
              pathname: `${routes.movies}/${id}`,
              state: { from: location },
            }}
          >
            <MoviesPreview
              title={title}
              imgUrl={
                poster_path ? api.posterImgPath + poster_path : empty
              }
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
export default withRouter(MoviesList);
