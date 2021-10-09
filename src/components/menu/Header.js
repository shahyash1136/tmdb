import React from "react";
import config from "../../common/config";

function Header() {
  return (
    <div className='container'>
      <div className='logo'>
        <img src={`${config.IMG_BASE}/logo.svg?v=1.2`} />
      </div>
    </div>
  );
}

export default Header;
