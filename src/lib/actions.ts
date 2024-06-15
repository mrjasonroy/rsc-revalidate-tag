'use server';

import { revalidateTag } from 'next/cache';
import prisma from './db';

async function createTodo(formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string ?? null;
  const completed = formData.get('completed') === 'true';
  const todo = prisma.todos.create({
    data: {
      title,
      completed,
      description,
    }
  });
  revalidateTag('todos');
  return todo;
}
async function updateTodo(formData: FormData) {
  const rawFormData = {
    id: formData.get('id') as string,
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    complete: formData.get('complete') === 'true',
  };
  const todo = prisma.todos.update({
    where: { id: rawFormData.id },
    data: {
      title: rawFormData.title,
      completed: rawFormData.complete,
      description : rawFormData.description,
      updatedAt: new Date(),
    },
  });
  revalidateTag('todos');
  revalidateTag(`todo-${rawFormData.id}`);
  return todo;
}
async function deleteTodo(id: string) {
  const todo = prisma.todos.delete({
    where: { id },
  });
  revalidateTag('todos');
  revalidateTag(`todo-${id}`);
  return;
}
async function createEnemy(formData: FormData) {
  const name = formData.get('name') as string;
  const enemy = prisma.enemies.create({
    data: {
      name,
    }
  });
  revalidateTag('enemies');
  return enemy;
}

export { createTodo, updateTodo, deleteTodo, createEnemy };
