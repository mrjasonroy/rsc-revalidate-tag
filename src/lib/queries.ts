import { cache } from 'react';
import prisma from './db';

const getTodos = cache(async () => {
  const todos = await prisma.todos.findMany();
  return todos;
});

const getEnemies = cache(async () => {
  const enemies = await prisma.enemies.findMany();
  // randomize the order of enemies
  enemies.sort(() => Math.random() - 0.5);
  return enemies;
});
const getTodosCount = cache(async () => {
  const count = await prisma.todos.count();
  return count;
});

const getTodo = cache(async (id: string) => {
  return prisma.todos.findUnique({ where: { id } });
});

export { getTodos, getTodosCount, getTodo, getEnemies };
