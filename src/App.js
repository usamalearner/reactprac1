import React from 'react';
import './App.css';
import Dinner from './dinner.js';
function App() {
  return (
    <div className='App'>
      {/* <Dinner></Dinner> */}
     <Dinner dishName="Nihari" sweetDish="ice cream"></Dinner>
      <hr />
      <Dinner dishName='Biryani' sweetDish='Jaleebi' />
      <hr />
      <Dinner dishName='Karahi' sweetDish='Gajar ka Halwa' />
      <Dinner myage={9}></Dinner>
    </div>
  );
}
export default App;