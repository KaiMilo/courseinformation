import React from "react";
import Total from './Total';
import Header from './Header';
import Content from './Content';

const Course = ({courses}) => {
    return (
    <div>
      <h1>Web Development</h1> 
      <div>
        {
          courses.map((x, index) => {
            console.log(x.id, x.id + index.toString() + index.toString() , x.name)
            return (
              <div>
              <Header key = {x.id + index.toString()} course = {x.name}/>
             <Content key = {x.id + index.toString() + index.toString() } parts = {x.parts}/>
             <Total key = {x.id + index.toString() + index.toString() + index.toString()} parts = {x.parts} />
             </div>
            )
          })
        }
        </div>
    </div> )
  }

export default Course