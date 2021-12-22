import React from "react";
import { Consume } from "../../context/Consumer";
import { TrendingDataContext } from "../../context";
import Heading from "./Heading";
import Card from "../Card/Card";
import SimpleBar from "simplebar-react";

function Trending(props) {
  const data = [
    { id: 1, value: "day", text: "Today" },
    { id: 2, value: "week", text: "This Week" },
  ];

  const { results } = props.TrendingData.trendingData;

  return (
    <div className='card__list'>
      <Heading heading={"Trending"} tabsValue={data} />
      <SimpleBar forceVisible='x' autoHide={false}>
        <div className='card__container'>
          {results.map((result) => {
            return <Card {...result} key={result.id} />;
          })}
        </div>
      </SimpleBar>
    </div>
  );
}

export default Consume(Trending, [TrendingDataContext]);
