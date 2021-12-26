import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const PeopleCard = ({ profile_path, name, id, known_for }) => {
  return (
    <div className='card'>
      <div className='card__people'>
        <div className='image'>
          <div className='wrapper'>
            <Link className='image' to={`/person/${id}`} title={name}>
              <img
                loading='lazy'
                className='poster'
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${profile_path}`}
                srcSet={`https://www.themoviedb.org/t/p/w220_and_h330_face${profile_path} 1x, https://www.themoviedb.org/t/p/w440_and_h660_face${profile_path} 2x`}
                alt={name}
              />
            </Link>
          </div>
        </div>
        <div className='meta'>
          <p className='name'>
            <Link to={`/person/${id}`}>{name}</Link>
          </p>
          <p className='sub'>
            {known_for.map((movie) => {
              return `${movie.title},`;
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PeopleCard;
