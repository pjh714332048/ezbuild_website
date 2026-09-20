import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from './store';
import { fetchTodosThunk } from './store/slices/todoSlice';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

/** 主应用组件 */
function App() {
  const dispatch = useDispatch<AppDispatch>();

  // 页面加载时获取待办列表
  useEffect(() => {
    dispatch(fetchTodosThunk());
  }, [dispatch]);

  return (
    <div className="app">
      <h1>待办事项</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
