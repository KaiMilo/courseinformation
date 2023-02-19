import React from 'react'

const Total = ({parts}) => {
    const total = parts.reduce(
      (s,p) => s + p.exercises,
       0)
    return (
      <div>
        <h4>Total of exercises { total }</h4>
      </div>
    )
  }

export default Total