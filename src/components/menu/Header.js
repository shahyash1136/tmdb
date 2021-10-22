/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.scss";
import config from "../../common/config";

function Header() {
  return (
    <div className='menu'>
      <div className='main__container'>
        <div className='menu__container'>
          <div className='menu__left'>
            <div className='logo'>
              <img src={`${config.IMG_BASE}/logo.svg?v=1.2`} alt='TMDB' />
            </div>
          </div>
          <div className='menu__right'>
            <ul className='menu__list'>
              <li>
                <span>Movies</span>
                <ul className='menu__sub'>
                  <li>
                    <a href='#'>
                      <span>Popular</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span>Now Playing</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span>Upcoming</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span>Top Rated</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <span>TV Show</span>
                <ul className='menu__sub'>
                  <li>
                    <a href='#'>
                      <span>Popular</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span>Now Playing</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span>Upcoming</span>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <span>Top Rated</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li>
                <a href=''>
                  <span>More</span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
