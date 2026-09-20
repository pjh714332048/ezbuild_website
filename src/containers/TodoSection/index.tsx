import { useEffect } from 'react';

import Typography from '@mui/material/Typography';
import AddTodo from 'components/AddTodo';
import TodoList from 'components/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from 'store/index';
import {
  addTodoThunk,
  deleteTodoThunk,
  fetchTodosThunk,
  toggleTodoThunk,
} from 'store/slices/todoSlice';

/** 待办区块 — 业务容器组件 */
const TodoSection: React.FC = () => {
  const { items, loading, error } = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTodosThunk());
  }, [dispatch]);

  const handleAdd = (text: string) => {
    dispatch(addTodoThunk(text));
  };

  const handleToggle = (id: string) => {
    dispatch(toggleTodoThunk(id));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTodoThunk(id));
  };

  return (
    <section
      id='todo'
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px 40px',
        background: '#f5f5f5',
      }}
    >
      <div style={{ width: '100%', maxWidth: 480, textAlign: 'center' }}>
        <Typography variant='h5' gutterBottom>
          待办事项
        </Typography>
        <AddTodo onAdd={handleAdd} />
        <TodoList
          todos={items}
          loading={loading}
          error={error}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      </div>
    </section>
  );
};

export default TodoSection;
