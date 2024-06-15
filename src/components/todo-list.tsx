'use client';
import { cn } from '@/lib/utils';
import { CheckIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

function TodoList({
  todos,
}: {
  todos: { id: string; title: string; completed: boolean }[];
}) {
  const pathname = usePathname();
  const [stateUpdateCount, setStateUpdateCount] = useState(0);
  useEffect(() => {
    setStateUpdateCount((prev) => prev + 1);
  },[todos]);
  if (!todos) return null;
  return (
    <>
    <nav className="grid items-start px-4 text-sm font-medium">
      {todos.map((todo) => {
        return (
          <Link
            key={todo.id}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 ',
              {
                'flex items-center gap-3 rounded-lg px-3 py-2 bg-gray-200 text-gray-900 transition-all hover:text-gray-900  ': pathname.endsWith(todo.id),
              }
            )}
            href={`/todo/${todo.id}`}
          >
            <CheckIcon
              className={cn('h-4 w-4', {
                'text-green-500': todo.completed,
                'text-gray-400': !todo.completed,
              })}
            />
            {todo.title}
          </Link>
        );
      })}
    </nav>
    <div className="text-center text-gray-500 mt-10">
        {stateUpdateCount} state updates
      </div>
    </>
    
  );
}

export { TodoList };
