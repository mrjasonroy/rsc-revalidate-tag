'use client';

import { createEnemy, createTodo } from '@/lib/actions';
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
import { useState } from 'react';
import { CreateEnemyButton } from './create-enemy-button';

function CreateEnemyDialog({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Enemy</DialogTitle>
        </DialogHeader>
        <form
          action={async (formData: FormData) => {
            await createEnemy(formData);
            setIsOpen(false);
          }}
        >
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" className="col-span-3" name="name" />
            </div>
          </div>
          <DialogFooter>
            <CreateEnemyButton />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export { CreateEnemyDialog };
