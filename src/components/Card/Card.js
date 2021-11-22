import React from "react";
import "./Card.scss";

const Card = (props) => {
  return (
    <div className='card'>
      <div className='image'>
        <div className='wrapper'>
          <a class='image' href='/movie/1930' title='The Amazing Spider-Man'>
            <img
              loading='lazy'
              class='poster'
              src='https://www.themoviedb.org/t/p/w220_and_h330_face/jIfkQNARYyERqRAq1p1c8xgePp4.jpg'
              srcset='https://www.themoviedb.org/t/p/w220_and_h330_face/jIfkQNARYyERqRAq1p1c8xgePp4.jpg 1x, https://www.themoviedb.org/t/p/w440_and_h660_face/jIfkQNARYyERqRAq1p1c8xgePp4.jpg 2x'
              alt=''
            />
          </a>
        </div>
        <div class='content'>
          <div class='consensus tight'>
            <div class='outer_ring'>
              <div
                class='user_score_chart 4bc89794017a3c122d0188e7'
                data-percent='66.0'
                data-track-color='#423d0f'
                data-bar-color='#d2d531'>
                <div class='percent'>
                  <span class='icon icon-r66'></span>
                </div>
                <canvas height='34' width='34'></canvas>
              </div>
            </div>
          </div>

          <h2>
            <a href='/movie/1930' title='The Amazing Spider-Man'>
              The Amazing Spider-Man
            </a>
          </h2>
          <p>Jun 23, 2012</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
