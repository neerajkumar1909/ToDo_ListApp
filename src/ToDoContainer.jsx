import Todos from "./Todos";

function ToDoContainer({ todos, deleteTodo }) {
  return (
    <div>
      <div className="task-container">
        {todos.map((todo, index) => {
          return <Todos todo={todo} index={index} deleteTodo={deleteTodo}/>;
        })}
      </div>
    </div>
  );
}

export default ToDoContainer;
