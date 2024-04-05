import { useState } from "react";
import { backendUrl } from '@constants';
import { isEnterKeyPressed } from '@utils';
import { deleteData, putData } from '@rest_utils';
import Trash from '@icons/Trash';
import Edit from '@icons/Edit';
import BackArrow from '@icons/BackArrow';

function Todo({ todo: { id, name, completed } }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(name);
  const [todoVal, setTodoVal] = useState(name);
  const [todoCompleted, setTodoCompleted] = useState(completed);

  const editTodo = (e) => {
    if (isEnterKeyPressed(e)) {
      putData(
        `${backendUrl}/todos/${id}`,
        { name: tempValue }
      ).then(({ name }) => {
        setTempValue(name);
        setTodoVal(name);
        setIsEditing(false);
      });
    }
  };

  const deleteTodo = (e) => {
    deleteData(
      `${backendUrl}/todos/${id}`
    ).then(() => {
      setIsEditing(false);
    });
  };

  const markTodoDone = (e) => {
    putData(
      `${backendUrl}/todos/${id}`,
      { completed: !todoCompleted }
    ).then(({ completed: isCompleted }) => {
      setTodoCompleted(isCompleted);
    });
  };

  return (
    <li className="d-flex align-items-center mb-1 todo-list-item">
      {
        isEditing ? (
          <>
            <div
              className="d-flex align-items-center flex-shrink-0"
              role="button"
              onClick={() => setIsEditing(false)}
            >
              <BackArrow />
            </div>
            <input
              type="text"
              className="form-control ms-1"
              placeholder="Add item"
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              onKeyDown={editTodo}
            />
            <div role="button" className="d-flex align-items-center text-danger flex-shrink-0 ms-2" onClick={deleteTodo}>
              <Trash />
            </div>
          </>
        ) : (
          <>
            <div className="me-auto">
              <input
                type="checkbox"
                checked={todoCompleted}
                className="form-check-input"
                role="button"
                onChange={markTodoDone}
              />
              <span className={`fs-6 ms-2 ${todoCompleted && 'text-decoration-line-through'}`}>{todoVal}</span>
            </div>
            {!todoCompleted && (
              <div
                className="align-items-center flex-shrink-0 edit-options"
                role="button"
                onClick={() => setIsEditing(true)}
              >
                <Edit />
              </div>
            )}
          </>
        )
      }
    </li>
  );
}

export default Todo;
