import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import type { Todo } from 'api/mockApi';

/** TodoList 组件 Props */
interface TodoListProps {
  todos: Todo[];
  loading: boolean;
  error: string | null;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

/** 待办列表 — 纯 UI 组件 */
const TodoList: React.FC<TodoListProps> = ({ todos, loading, error, onToggle, onDelete }) => {
  if (loading) return <CircularProgress sx={{ display: 'block', margin: '24px auto' }} />;
  if (error)
    return (
      <Typography color='error' sx={{ textAlign: 'center', p: 2 }}>
        {error}
      </Typography>
    );
  if (todos.length === 0)
    return (
      <Typography color='text.secondary' sx={{ textAlign: 'center', p: 2 }}>
        暂无待办事项
      </Typography>
    );

  return (
    <List>
      {todos.map(todo => (
        <ListItem
          key={todo.id}
          secondaryAction={
            <IconButton edge='end' color='error' onClick={() => onDelete(todo.id)}>
              <DeleteIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton dense onClick={() => onToggle(todo.id)}>
            <Checkbox checked={todo.completed} tabIndex={-1} disableRipple />
            <ListItemText
              primary={todo.text}
              slotProps={{
                primary: {
                  sx: todo.completed ? { textDecoration: 'line-through' } : undefined,
                },
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;
