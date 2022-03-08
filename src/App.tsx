import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';
import { IsState } from './components/interface/IsState';

// interface IsState {
//   people: {
//     name: string,
//     age: number,
//     url: string,
//     note?: string
//   }[]
// }


function App() {
  const [people, setPeople] = useState<IsState['people']>([
    {
      name: 'Fahim Hossain',
      url: 'https://avatars.githubusercontent.com/u/77225912?v=4',
      age: 25,
      note: "Allergic to dust"
    }
  ]);


  return (
    <div className="App">
      <h1>People Invited to my party</h1>
      <List people={people}></List>
      <AddToList people={people} setPeople={setPeople}></AddToList>
    </div >
  );
}

export default App;
