import { useEffect, useState } from "react";
import { backendUrl } from '@constants';
import { isEnterKeyPressed } from '@utils';
import { getData, deleteData, postData } from '@rest_utils';
import Todo from "@components/todo/Todo";
import Trash from '@icons/Trash';

function TodoList({ todoList: { id, title } }) {
  const todoListDomId = `todo_list_${id}`;
  const [todos, setTodos] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    getData(
      `${backendUrl}/todolists/${id}/todos`
    ).then((res) => {
      setTodos(res);
    });
  }, [id]);

  const addTodo = (e) => {
    if (isEnterKeyPressed(e)) {
      postData(
        `${backendUrl}/todolists/${id}/todos`,
        { title: inputValue }
      ).then((res) => {
        setInputValue('');
        setTodos([...todos, res]);
      });
    }
  };

  const deleteList = (e) => {
    e.stopPropagation();
    deleteData(
      `${backendUrl}/todolists/${id}`
    ).then(() => {
    });
  };

  return (
    <div className="col col-xs-12 col-sm-12 col-md-6 col-lg-4 accordion">
      <div className="accordion-item">
        <h2 className="accordion-header position-relative" onClick={() => setIsCollapsed(!isCollapsed)}>
          <button
            className={`accordion-button ${isCollapsed ? 'collapsed' : ''}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${todoListDomId}`}
            aria-expanded={!isCollapsed}
            aria-controls={todoListDomId}
          >
            {title}
          </button>
          <span role="button"
            className="align-items-center position-absolute delete-todo-list"
            onClick={deleteList}
          >
            <Trash />
          </span>
        </h2>
        <div id={todoListDomId} className={`accordion-collapse collapse ${isCollapsed ? '' : 'show'}`}>
          <div className="accordion-body">
            {todos.length ? (
              <ul className="list-group mb-2">
                {todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
              </ul>
            ) : null}
            <input
              type="text"
              className="form-control"
              placeholder="Add item"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={addTodo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
