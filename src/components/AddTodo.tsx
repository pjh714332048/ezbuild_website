import { useState } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store';
import { addTodoThunk } from '../store/slices/todoSlice';

/** 添加待办组件 */
function AddTodo() {
  const [text, setText] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  /** 处理添加 */
  const handleAdd = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    dispatch(addTodoThunk(trimmed));
    setText('');
  };

  /** 回车键添加 */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="输入待办事项..."
      />
      <button onClick={handleAdd}>添加</button>
    </div>
  );
}

export default AddTodo;
