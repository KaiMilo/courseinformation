import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = {
    name: 'Half Stack Aplication Development',
    parts: [{
    name: 'Fundamentals of React' ,
    exercises: 10},
    {
      name: 'Using props to pass data' ,
      exercises: 7},
    {
        name: 'State of a component',
        exercises: 14} ] }
  return (
    <div>
      <Header course={course.name}/>
      <Content part1 = {course.parts[0].name} part2 = {course.parts[1].name} part3 = {course.parts[2].name} 
      exercises1 = {course.parts[0].exercises} exercises2 = {course.parts[1].exercises} exercises3 = {course.parts[2].exercises}/>
      <Total exercises1 = {course.parts[0].exercises} exercises2 = {course.parts[1].exercises} exercises3 = {course.parts[2].exercises}/>
    </div>
  )
}
const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}
const Header = (props) => {
  return (
    <div>
    <h1> {props.course}</h1>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part part = {props.part1}  exercises = {props.exercises1}/>
      <Part part = {props.part2}  exercises = {props.exercises2}/>
      <Part part = {props.part3}  exercises = {props.exercises3}/>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
