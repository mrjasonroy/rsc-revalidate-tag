import { getTodos } from '@/lib/queries';
import { TodoList } from '../todo-list';

async function TodoListLoader() {
  const todos = await getTodos();
  if (!todos) return null;
  return <TodoList todos={todos} />;
}

export { TodoListLoader };
