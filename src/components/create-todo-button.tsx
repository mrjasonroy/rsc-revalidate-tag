'use client';

import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';

export function AddTodoButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Adding Todo ...' : 'Add Todo'}
    </Button>
  );
}
