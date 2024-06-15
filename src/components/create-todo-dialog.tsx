'use client';

import { createTodo } from '@/lib/actions';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { AddTodoButton } from './create-todo-button';

function CreateTodoDialog({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Todo</DialogTitle>
        </DialogHeader>
        <form
          action={async (formData: FormData) => {
            await createTodo(formData);
            setIsOpen(false);
          }}
        >
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input id="title" className="col-span-3" name="title" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                className="col-span-3"
                name="description"
              />
            </div>
          </div>
          <DialogFooter>
            <AddTodoButton />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export { CreateTodoDialog };
