import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

/** AddTodo 组件 Props */
interface AddTodoProps {
  onAdd: (text: string) => void;
}

/** 添加待办 — 纯 UI 组件 */
const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <Stack direction='row' spacing={1} sx={{ width: '100%', mb: 2 }}>
      <TextField
        fullWidth
        size='small'
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='输入待办事项...'
      />
      <Button variant='contained' startIcon={<AddIcon />} onClick={handleAdd}>
        添加
      </Button>
    </Stack>
  );
};

export default AddTodo;
