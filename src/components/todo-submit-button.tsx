'use client';

import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';

export function TodoSubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Updating Todo...' : 'Update Todo'}
    </Button>
  );
}
