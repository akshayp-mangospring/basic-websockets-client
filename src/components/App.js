import { useEffect, useState } from "react";
import "@styles/App.sass";
import { backendUrl } from '@constants';
import { getData, postData } from '@rest_utils';
import TodoList from '@components/todo/TodoList';

function App() {
  const [todoLists, setTodoLists] = useState([]);
  const [inputValue, setInputValue] = useState([]);

  useEffect(() => {
    // Get All Todo Lists
    getData(
      `${backendUrl}/todolists`
    ).then((res) => {
      setTodoLists(res);
    });
  }, []);

  // Create a Todo list
  const createTodoList = (e) => {
    e.preventDefault();
    postData(
      `${backendUrl}/todolists`,
      { title: e.target['todo-list-item'].value }
    ).then((res) => {
      setTodoLists([...todoLists, res])
      setInputValue('');
    });
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">My To Dos</h1>
      <form className="d-flex mb-3" onSubmit={createTodoList}>
        <input
          type="text"
          className="form-control rounded-end-0"
          name="todo-list-item"
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
