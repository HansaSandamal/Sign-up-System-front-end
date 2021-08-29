import React from 'react';
import './App.css';
import Details from './Details';
import User from './User';

export const UserContext = React.createContext('');

export default function App() {
   
  return (
    <div className="App">
     <UserContext.Provider value="Reed">
      <User />
      <Details/>
    </UserContext.Provider>
    </div>
  );
}

