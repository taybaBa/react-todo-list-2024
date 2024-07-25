import React, { useState } from "react";

const AddToDo = (props) => {
    const [title,setTitle] =  useState("");
    const [desc,setDesc] =  useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Descrption cannot be blank")
        }
      props.addToDo(title,desc);

    }
  return (
    <div className="container">
        <h3 className="text-center my-3">Add a To do</h3>
      <form onSubmit={submit} >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
           Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            aria-describedby="emailHelp"  />
         
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
          ToDo Description
          </label>
          <input
            type="text"
            className="form-control"
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-success btn-sm">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddToDo;
