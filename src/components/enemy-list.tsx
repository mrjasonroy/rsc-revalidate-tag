'use client';
import { UserIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CreateEnemyDialog } from './create-enemy-dialog';
import { Button } from './ui/button';

function EnemyList({ enemies }: { enemies: { id: string; name: string }[] }) {
  const [stateUpdateCount, setStateUpdateCount] = useState(0);
  useEffect(() => {
    setStateUpdateCount((prev) => prev + 1);
  },[enemies]);
  return (
    <>
      {enemies.map((enemy) => (
        <>
          <Link
            href="#"
            key={enemy.id}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900"
            prefetch={false}
          >
            <UserIcon className="h-4 w-4" />
            {enemy.name}
          </Link>
        </>
      ))}
      <CreateEnemyDialog>
        <Button variant="default" className="mt-2" size="sm">
          Create Enemy
        </Button>
      </CreateEnemyDialog>
      <div className="text-center text-gray-500 mt-10">
        {stateUpdateCount} state updates
      </div>
    </>
    
  );
}

export { EnemyList };
