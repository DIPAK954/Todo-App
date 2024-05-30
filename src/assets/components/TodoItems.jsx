import TodoItem from "./TodoItem"


const TodoItems = ({todoItems,onDeletClick}) =>{
    return(
        <div >
            {todoItems.map((item)=>(
                <TodoItem todoDate={item.dueDate} todoName={item.name} onDeletClick={onDeletClick}></TodoItem>
            ))}

        </div>
    );
}

export default TodoItems;