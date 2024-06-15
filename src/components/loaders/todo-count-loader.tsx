import { getTodosCount } from '@/lib/queries';

import { Badge } from '../ui/badge';

async function TodoCountLoader() {
  const todoCount = await getTodosCount();
  if (!todoCount) return null;
  return (
    <div className="flex h-[60px] items-center border-b px-6">
      <span className="font-semibold">Todo</span>
      <Badge className="ml-auto">{todoCount}</Badge>
    </div>
  );
}

export { TodoCountLoader };
