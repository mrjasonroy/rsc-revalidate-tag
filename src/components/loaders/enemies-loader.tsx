import { EnemyList } from '@/components/enemy-list';
import { getEnemies } from '@/lib/queries';

async function EnemiesLoader() {
  const enemies = await getEnemies();
  if (!enemies) return null;
  return <EnemyList enemies={enemies} />;
}

export { EnemiesLoader };
