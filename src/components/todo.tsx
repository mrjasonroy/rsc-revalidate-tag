'use client';

import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { TodoSubmitButton } from './todo-submit-button';
import { updateTodo } from '@/lib/actions';
import { useRef, useState } from 'react';
import { TodoMarkCompleteButton } from './todo-mark-complete-button';

function Todo({
  todo,
}: {
  todo: {
    id: string;
    title: string;
    description: string | null;
    completed: boolean;
  };
}) {
  const [isComplete, setIsComplete] = useState(todo.completed);
  const formRef = useRef<HTMLFormElement>(null);
  const handleMarkAsDone = () => {
    setIsComplete((prev) => !prev);
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.requestSubmit();
      }
    }, 0);
  };
  return (
    <form action={updateTodo} ref={formRef}>
      <Card>
        <CardHeader>
          <Input defaultValue={todo.title} id="title" name="title" />
        </CardHeader>
        <CardContent>
          <Textarea
            defaultValue={todo.description ?? undefined}
            id="description"
            name="description"
            rows={5}
          />
        </CardContent>
        <input type="hidden" name="id" value={todo.id} />
        <input
          type="hidden"
          name="complete"
          value={isComplete === true ? 'true' : 'false'}
        />
        <CardFooter className="flex justify-between">
          <TodoMarkCompleteButton
            isComplete={isComplete}
            onClick={handleMarkAsDone}
          />
          <TodoSubmitButton />
        </CardFooter>
      </Card>
    </form>
  );
}

export { Todo };
