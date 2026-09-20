import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch, RootState } from '../store';
import {
  toggleTodoThunk,
  deleteTodoThunk,
} from '../store/slices/todoSlice';

/** 待办列表组件 */
function TodoList() {
  const { items, loading, error } = useSelector(
    (state: RootState) => state.todos
  );
  const dispatch = useDispatch<AppDispatch>();

  if (loading) return <p className="status-text">加载中...</p>;
  if (error) return <p className="status-text error">{error}</p>;
  if (items.length === 0) return <p className="status-text">暂无待办事项</p>;

  return (
    <ul className="todo-list">
      {items.map((todo) => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodoThunk(todo.id))}
            />
            <span>{todo.text}</span>
          </label>
          <button
            className="delete-btn"
            onClick={() => dispatch(deleteTodoThunk(todo.id))}
          >
            删除
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
