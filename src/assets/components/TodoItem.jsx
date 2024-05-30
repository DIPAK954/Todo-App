import { MdDelete } from "react-icons/md";

function TodoItem({todoName,todoDate,onDeletClick}) {
   
  return (
    <div className="container ">
      <div className="row apni_row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger apna_btn" onClick={() => onDeletClick(todoName)}>
           <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
