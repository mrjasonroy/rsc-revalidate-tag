'use server';

import { revalidatePath } from 'next/cache';
import prisma from './db';
import { redirect } from 'next/navigation';

async function createTodo(formData: FormData) {
  const title = formData.get('title') as string;
  const description = (formData.get('description') as string) ?? null;
  const completed = formData.get('completed') === 'true';
  const todo = await prisma.todos.create({
    data: {
      title,
      completed,
      description,
    },
  });
  revalidatePath('/@todos');
  redirect(`/todos/${todo.id}`);
  return todo;
}
async function updateTodo(formData: FormData) {
  const rawFormData = {
    id: formData.get('id') as string,
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    complete: formData.get('complete') === 'true',
  };
  const todo = await prisma.todos.update({
    where: { id: rawFormData.id },
    data: {
      title: rawFormData.title,
      completed: rawFormData.complete,
      description: rawFormData.description,
      updatedAt: new Date(),
    },
  });
  revalidatePath('/@todos');
  return todo;
}
async function deleteTodo(id: string) {
  const todo = await prisma.todos.delete({
    where: { id },
  });
  revalidatePath('/@todos');
  return;
}
async function createEnemy(formData: FormData) {
  const name = formData.get('name') as string;
  const enemy = await prisma.enemies.create({
    data: {
      name,
    },
  });
  revalidatePath('/@enemies');
  return enemy;
}

export { createTodo, updateTodo, deleteTodo, createEnemy };
