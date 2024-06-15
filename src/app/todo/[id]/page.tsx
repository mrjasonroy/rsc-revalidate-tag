import { Todo } from '@/components/todo';
import { getTodo } from '@/lib/queries';

export default async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const todo = await getTodo(params.id);
  if (!todo) return null;
  return <Todo todo={todo} />;
}
