import AppName from "./assets/components/AppName";
import TodoAdd from "./assets/components/TodoAdd";
import "./App.css";
import TodoItems from "./assets/components/TodoItems";
import { useState } from "react";

function app() {
  const [todoItems,setTodoItems] = useState([]);

  const handleNewitem = (itemName,itemDate) =>{
   console.log(`New Item added: ${itemName} Date:${itemDate}`);
   const newTodoItems = [...todoItems,{name: itemName,dueDate: itemDate}];
   setTodoItems(newTodoItems);
  }  
  
  const handleDeleteItem = (todoItemName) =>{
     const newTodoItems = todoItems.filter(item => item.name !==todoItemName);
    setTodoItems(newTodoItems);
  }

  return (
    <center className="todo-container">
      <AppName></AppName>
      <TodoAdd onNewItem={handleNewitem}></TodoAdd>
      <TodoItems todoItems={todoItems} onDeletClick={handleDeleteItem}></TodoItems>
      
    </center>
    
  );
}

export default app;
