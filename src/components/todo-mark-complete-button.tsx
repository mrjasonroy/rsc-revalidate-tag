'use client';

import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';

export function TodoMarkCompleteButton({
  isComplete,
  onClick,
}: {
  isComplete: boolean;
  onClick: () => void;
}) {
  const { pending } = useFormStatus();

  return (
    <Button variant="outline" disabled={pending} onClick={onClick}>
      {isComplete ? 'Mark as Not Done' : 'Mark as Done'}
    </Button>
  );
}
