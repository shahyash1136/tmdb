import React, { useEffect, useState } from "react";
import { Consume } from "../../context/Consumer";
import { PersonDataContext } from "../../context";
import PeopleCard from "../Card/PeopleCard";
import Heading from "./Heading";
import SimpleBar from "simplebar-react";

const People = (props) => {
  const { peopleList, getPeopleList, isLoading } = props.PersonData;
  const { results } = peopleList;

  return (
    <div className='card__list'>
      <Heading heading={"Popular People"} tabsValue={null} />
      <SimpleBar forceVisible='x' autoHide={false}>
        <div className='card__container'>
          {results.map((result) => {
            return <PeopleCard {...result} key={result.id} />;
          })}
        </div>
      </SimpleBar>
    </div>
  );
};

export default Consume(People, [PersonDataContext]);
