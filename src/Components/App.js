import React from "react";
import Course from "./Course";

const App = () => {
    const courses = [{
      id: 'c1',
      name: 'Half Stack Aplication Development',
      parts: [{
      name: 'Fundamentals of React' ,
      exercises: 10,
      id: 'p1_1'},
      {
        name: 'Using props to pass data' ,
        exercises: 7,
        id: 'p1_2'},
      {
          name: 'State of a component',
          exercises: 14,
        id: 'p1_3'},
        {
          name: 'Redux',
          exercises: 11,
        id: 'p1_4'} ] },
      {
        id: 'c2',
        name: 'Node.js',
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 'p2_1'
          },
          {
            name: 'Routing',
            exercises: 3,
            id: 'p2_2'
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 'p2_3'
          }
        ]
      } ]
    return (
      <div>
        <Course key= {'course_1'} courses = {courses}/>
      </div>
    )
  }

export default App