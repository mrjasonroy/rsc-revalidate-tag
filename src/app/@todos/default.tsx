import { TodoCountLoader } from '@/components/loaders/todo-count-loader';
import { TodoListLoader } from '@/components/loaders/todo-list-loader';
import { TodoListSkeleton, TodoCountSkeleton } from '@/components/skeletons';
import { Suspense } from 'react';

export default function Default() {
  return (
    <>
      <Suspense fallback={<TodoCountSkeleton />}>
        <TodoCountLoader />
      </Suspense>
      <Suspense fallback={<TodoListSkeleton />}>
        <TodoListLoader />
      </Suspense>
    </>
  );
}
