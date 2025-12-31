'use client';

import Wrapper from '../../_assets/_wrapper/Tutorials_00';

import { usePeopleContext, PeopleContextProvider } from './_context';

const PropDrilling_00 = () => {
  return (
    <PeopleContextProvider>
    <Wrapper>
      <div className='container'>
        <h3>Context API Demo</h3>
        <List/>
      </div>
    </Wrapper>
    </PeopleContextProvider>
  );
};

const List = () => {
    const {people} = usePeopleContext();
  return (
    <>
      {people.map((person) => {
        return <SinglePerson 
        key={person.id} 
        {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
    const {removePerson} = usePeopleContext();
    return (
    <div className='item'>
        <h4>{name}</h4>
        <button className='btn' onClick={() => removePerson(id)}> 
        remove</button>
    </div>
    );
};

export default PropDrilling_00  ;
