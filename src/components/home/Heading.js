import React from "react";
import Tabs from "../Tabs";

function Heading({ heading, tabsValue }) {
  return (
    <div className='column_header'>
      <h2>{heading}</h2>
      <Tabs tabsValue={tabsValue} />
    </div>
  );
}

export default Heading;
