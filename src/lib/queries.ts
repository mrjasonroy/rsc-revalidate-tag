import prisma from './db';
import { unstable_cache } from 'next/cache';

const getTodos = unstable_cache(
  async () => {
    const todos = await prisma.todos.findMany();
    return todos;
  },
  ['todos'],
  {
    tags: ['todos'],
  }
);

const getEnemies = unstable_cache(
  async () => {
    const enemies = await prisma.enemies.findMany();
    // randomize the order of enemies
    enemies.sort(() => Math.random() - 0.5);
    return enemies;
  },
  ['enemies'],
  {
    tags: ['enemies'],
  }
);

const getTodosCount = unstable_cache(
  async () => {
    const count = await prisma.todos.count();
    return count;
  },
  ['todos-count'],
  {
    tags: ['todos'],
  }
);


const getTodo = async (id: string) => {
  const getTodo = unstable_cache(
    async () => {
      return prisma.todos.findUnique({ where: { id } });
    },
    ['todo', id],
    {
      tags: [`todo-${id}`],
    }
  );
  return await getTodo();
};

export { getTodos, getTodosCount, getTodo, getEnemies };
