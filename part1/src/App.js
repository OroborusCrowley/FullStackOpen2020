import React from 'react'

const App = () => {
  const elements = {
    header: {
      title: "Header",
      course_name: "Half Stack application development"
    },
    parts:{
      title:"Parts",
      elements:
      [
        {
          title:"Fundamentals of React",
          exercises:10
        },
        {
          title:"Using props to pass data",
          exercises:7
        },
        {
          title:"State of a component",
          exercises:14
        }
      ]
    },
    total:{
      title:"Number of excercises",
    }
  }

  const Header = (props) => {
    return (
      <div>
        <h1>{props.course.course_name}</h1>
      </div>
    )
  }
  const Content =(props) =>{
    let elements_react = []; 
    props.elements.elements.forEach(parte => {
      elements_react.push( React.createElement(
        'p', null, `${parte.title} ${parte.exercises}`));
    });

    return (
      <div>
        {elements_react}
      </div>
    )
  }

  const Total = (props) => {
    let operation = 0
    props.elements.elements.forEach(parte => {
      operation += parte.exercises
    });

    return (
      <div>
        <p>
          {props.eval.title} = {operation}
        </p>
      </div>
    )
  }
  

  return (
    <div>
      <Header course={elements.header} />
      <Content elements={elements.parts} />
      <Total eval={elements.total} elements={elements.parts} />
    </div>
  )
}

export default App