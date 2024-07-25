import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddToDo from './MyComponents/AddToDo';
import React, { useState } from 'react';
 

function App() {
  const onDelete = (todo)=>{
    console.log('i am on delete of todo',todo)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }
  const addToDo = (title,desc) =>{
    console.log("i am adding",title,desc)
  }
const [todos,setTodos] = useState([ 
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market"
    },
    {
      sno: 2,
      title: "Go to the Gym",
      desc: "You need to go to the gym"
    },
    {
      sno: 3,
      title: "Go to the Office",
      desc: "You need to go to the office"
    }
  ]);
  return (
    <>
    <Header title = "My Todos List" searchBar = {false}/>
    <AddToDo addToDo={addToDo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
