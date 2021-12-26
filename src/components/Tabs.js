import React from "react";

const Tabs = ({ tabsValue }) => {
  const tabData = tabsValue === null ? null : tabsValue;
  const tabHandler = (el) => {
    tabData.setActiveTab(el.id);
  };
  return tabData ? (
    <div className='selector_wrap'>
      <div className='selector'>
        {tabData.data.map((tab) => {
          return (
            <div
              className={`anchor ${
                tabData.activeTab === tab.id ? "selected" : ""
              }`}
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
  ) : null;
};

export default Tabs;
