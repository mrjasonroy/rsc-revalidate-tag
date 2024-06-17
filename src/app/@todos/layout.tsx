import { CreateTodoDialog } from '@/components/create-todo-dialog';
import { TodoCountLoader } from '@/components/loaders/todo-count-loader';
import { TodoListLoader } from '@/components/loaders/todo-list-loader';
import { TodoListSkeleton, TodoCountSkeleton } from '@/components/skeletons';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import { Suspense } from 'react';

export default function Default({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="hidden border-r bg-gray-100/40 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <Suspense fallback={<TodoCountSkeleton />}>
            <TodoCountLoader />
          </Suspense>
          <Suspense fallback={<TodoListSkeleton />}>
            <TodoListLoader />
          </Suspense>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 lg:h-[60px]">
          <CreateTodoDialog>
            <Button variant="ghost" size="icon" className="rounded-full">
              <PlusIcon className="h-4 w-4" />
              <span className="sr-only">Add Todo</span>
            </Button>
          </CreateTodoDialog>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Todo</h1>
          </div>
          {children}
        </main>
      </div>
    </>
  );
}
