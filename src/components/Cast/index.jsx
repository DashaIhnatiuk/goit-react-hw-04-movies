import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as api from '../../api/movies-api';
import noCastImg from '../../images/empty.png';
import s from './Cast.module.css';

export default class Cast extends Component {
  state = { cast: [] };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    api
      .getMoviesCast(movieId)
      .then(({ cast }) => {
        this.setState({
          cast: [...cast],
        });
      })
      .catch(error => toast.error(error));
  }

  render() {
    const { cast } = this.state;

    return (
      <div className={s.section}>
        <h2 className={s.title}>cast</h2>

        <ul className={s.container}>
          {cast &&
            cast.map(({ credit_id, profile_path, character, name }) => (
              <li key={credit_id} className={s.item}>
                <div className={s.imageContainer}>
                  <img
                    className={s.image}
                    src={profile_path ? api.imgPath + profile_path : noCastImg}
                    alt={name}
                  />
                </div>
                <p className={s.name}>{name}</p>
                <p className={s.text}>Character: {character}</p>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
