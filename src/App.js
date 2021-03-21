import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import MyLoader from './components/Loader';
import NotFound from './components/NotFound';
import routes from './routes';
import s from './index.css';

const HomePage = lazy(() =>
  import('./components/HomePage'),
);

const SearchMovieView = lazy(() =>
  import(
    './components/Search'),
);

const MovieDetailsPage = lazy(() =>
  import(
    './components/MovieDetailsPage'),
);

const App = () => (
  <div className={s.container}>
    <Navigation/>
    <Suspense fallback={<MyLoader />}>
    <Switch>
    <Route exact path={routes.home} component={HomePage} />
    <Route exact path={routes.movies} component={SearchMovieView} />
    <Route path={routes.movieId} component={MovieDetailsPage} />
    <Route component={NotFound} />
      </Switch>
    </Suspense>
  </div>
);

export default App;
