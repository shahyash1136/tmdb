import React, { useEffect, useState } from "react";
import { Consume } from "../context/Consumer";
import { TrendingDataContext } from "../context";
import config from "../common/config";

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    props.TrendingData?.getTrendingData(
      activeTab === 1 ? config.Time_Window.day : config.Time_Window.week,
      { api_key: config.API_KEY },
      () => {}
    );
  }, [activeTab]);

  const tabHandler = (el) => {
    setActiveTab(el.id);
  };
  return (
    <div className='selector_wrap'>
      <div className='selector'>
        {props.tabsValue.map((tab) => {
          return (
            <div
              className={`anchor ${activeTab === tab.id ? "selected" : ""}`}
              key={tab.id}
              onClick={() => tabHandler(tab)}>
              <h3>
                <div className='no_click'>{tab.text}</div>
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Consume(Tabs, [TrendingDataContext]);
