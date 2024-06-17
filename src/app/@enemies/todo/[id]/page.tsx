import { EnemyList } from '@/components/enemy-list';
import { getEnemies } from '@/lib/queries';

export default async function Page() {
  const enemies = await getEnemies();
  if (!enemies) return null;
  return (
    <EnemyList enemies={enemies}  />
  )
}
