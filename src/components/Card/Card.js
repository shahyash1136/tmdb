import React from "react";
import { Link } from "react-router-dom";
import config from "../../common/config";
import moment from "moment";
import "./Card.scss";

const Card = ({ poster_path, title, vote_average, id, release_date }) => {
  let votePer = vote_average * 10;
  let barColor;
  if (votePer < 40) {
    barColor = config.Bar_Color.red;
  } else if (votePer > 40 && votePer < 60) {
    barColor = config.Bar_Color.yellow;
  } else {
    barColor = config.Bar_Color.green;
  }
  return (
    <div className='card'>
      <div className='image'>
        <div className='wrapper'>
          <Link className='image' to={`/movie/${id}`} title={title}>
            <img
              loading='lazy'
              className='poster'
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`}
              srcSet={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path} 1x, https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path} 2x`}
              alt={title}
            />
          </Link>
        </div>
      </div>
      <div className='content'>
        <div className='consensus tight'>
          <div className='outer_ring'>
            <div className='user_score_chart'>
              <div className='percent'>
                <svg viewBox='0 0 36 36' className='circular-chart'>
                  <path
                    className='circle-bg'
                    d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'></path>
                  <path
                    className='circle'
                    strokeDasharray={`${votePer}, 100`}
                    d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                    stroke={`${barColor}`}></path>
                  <text x='18' y='22.35' className='percentage'>
                    {votePer}%
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <h2>
          <Link to='/movie/1930' title={title}>
            {title}
          </Link>
        </h2>
        <p>{moment(release_date).format("MMM DD, YYYY")}</p>
      </div>
    </div>
  );
};

export default Card;
