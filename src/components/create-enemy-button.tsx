'use client';

import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';

export function CreateEnemyButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Creating Enemy ...' : 'Create Enemy'}
    </Button>
  );
}
