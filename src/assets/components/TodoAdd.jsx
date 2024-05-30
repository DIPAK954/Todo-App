import { useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";

function TodoAdd({onNewItem}){

  const [todoName,setTodoName] = useState("");
  const [dueDate,setDueDate] = useState("");

  const handleNameChange =(event)=>{
   setTodoName(event.target.value);
  }

  const handleDateChange =(event)=>{
   setDueDate(event.target.value);
  }

  const handleAddButtonClicked = () =>{
    onNewItem(todoName,dueDate);
    setDueDate();
    setTodoName();
  }

  return(  <div className="container text-center">
    <div className="row apni_row">
      <div className="col-6">
        <input type="text" placeholder="Enter Todo Here" value={todoName} onChange={handleNameChange}></input>
      </div>
      <div className="col-4">
        <input type="date" value={dueDate} onChange={handleDateChange}></input>
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success apna_btn" 
        onClick={handleAddButtonClicked}>
          <MdAddCircleOutline />
        </button>
      </div>
    </div>
  </div>);

}

export default TodoAdd;