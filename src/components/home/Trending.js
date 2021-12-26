import React, { useEffect, useState } from "react";
import { Consume } from "../../context/Consumer";
import { TrendingDataContext } from "../../context";
import Heading from "./Heading";
import Card from "../Card/Card";
import SimpleBar from "simplebar-react";
import config from "../../common/config";

function Trending(props) {
  const data = [
    { id: 1, value: "day", text: "Today" },
    { id: 2, value: "week", text: "This Week" },
  ];

  const [activeTab, setActiveTab] = useState(1);
  const { trendingData, getTrendingData, isLoading } = props.TrendingData;
  const { results } = trendingData;

  useEffect(() => {
    !isLoading &&
      getTrendingData(
        activeTab === 1 ? config.Time_Window.day : config.Time_Window.week,
        { api_key: config.API_KEY },
        () => {}
      );
  }, [activeTab]);

  let tabData = {
    data: data,
    activeTab,
    setActiveTab,
  };

  return (
    <div className='card__list'>
      <Heading heading={"Trending"} tabsValue={tabData} />
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
