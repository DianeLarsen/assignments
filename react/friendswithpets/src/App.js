import React from 'react';
import './App.css';
import data from './data.js';
import Friend from "./components/Friend";
import FriendList from "./components/FriendList";
import Pet from "./components/Pet";
import Header from "./components/Header";

function App() {
  const friends = data.map(item => {
    return (
              <Friend 
            key={item.name}
            {...item}
        />
        
           
        
    )
}) 
const friendsList = data.map(item => {
  return (
            <FriendList 
          key={item.name}
          {...item}
      />
      
         
      
  )
})      
const pets = data.map(item => {
  return (
            <Pet 
          key={item.name}
          {...item}
      />
      
         
      
  )
})   
  return (
    <div className="App">
      <Header />
      <section className="cards-list">
                {friends}
                {friendsList}
                {pets}
      </section>
      

    </div>
  );
}

export default App;
