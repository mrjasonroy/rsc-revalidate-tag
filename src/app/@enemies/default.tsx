import { EnemyList } from '@/components/enemy-list';
import { EnemiesLoader } from '@/components/loaders/enemies-loader';
import { getEnemies } from '@/lib/queries';
import { Suspense } from 'react';

export default async function Default() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EnemiesLoader />
    </Suspense>
  );
}
