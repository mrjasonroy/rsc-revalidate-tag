import { CreateTodoDialog } from '@/components/create-todo-dialog';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-xl font-semibold">No Todo Selected</h2>
        <p className="text-center text-gray-500">
          Create a new todo or select one from the left sidebar.
        </p>
        <CreateTodoDialog>
          <Button size="lg" className="inline-flex">
            <PlusIcon className="mr-2 h-4 w-4" />
            Create Todo
          </Button>
        </CreateTodoDialog>
      </div>
    </>
  );
}
