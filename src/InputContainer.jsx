function InputContainer({ inputValue, writeTodo, addTodos, handleKeyPress }) {
  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter items"
          value={inputValue}
          onChange={writeTodo}
          autoFocus
        />
        <button onClick={addTodos}>+</button>
      </div>
    </div>
  );
}

export default InputContainer;
