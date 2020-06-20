import React from 'react';
import './App.css';
import Dinner from './dinner.js';
function App() {
  return (
    <div className='App'>
      {/* <Dinner></Dinner> */}
     <Dinner dishName="Nihari" sweetDish="ice cream" myage={9}></Dinner>
      <hr />
      <Dinner dishName='Biryani' sweetDish='Jaleebiiii' myage={98} />
      <hr />
      <Dinner dishName='Karahi' sweetDish='Gajar ka Halwa' myage={9} />
      
    </div>
  );
}
export default App;