import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "@styles/App.sass";
import { getTodoLists, addTodoList, } from "@store/todoListSlice";
import { isBlank } from '@utils';
import TodoList from '@components/todo/TodoList';

function App() {
  const dispatch = useDispatch();
  const { todoLists } = useSelector(({ todoLists }) => todoLists);
  const [inputValue, setInputValue] = useState([]);

  useEffect(() => {
    dispatch(getTodoLists());
  }, [dispatch]);

  // Create a Todo list
  const createTodoList = async (e) => {
    e.preventDefault();
    const inputValue = e.target['todo-list-item'].value.trim();
    if (isBlank(inputValue)) return;
    await dispatch(addTodoList(inputValue));
    setInputValue('');
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">My To Dos</h1>
      <form className="d-flex mb-3" onSubmit={createTodoList}>
        <input
          type="text"
          className="form-control rounded-end-0"
          placeholder="Add a To Do List"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button type="submit" className="btn btn-primary rounded-start-0">Submit</button>
      </form>
      <div className="row d-flex flex-wrap g-3">
        {todoLists.map((list) => <TodoList key={list.id} todoList={list} />)}
      </div>
    </div>
  );
}

export default App;
