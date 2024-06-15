import prisma from '../src/lib/db';

const todos = [
  {
    title: 'Learn Next.js',
    description:
      'Learn how to use loaders, actions, and prisma to build a todo app.',
    completed: true,
  },
  {
    title: 'Build a Todo App',
    description: 'Build a todo app with Next.js, Prisma, and Postgres.',
    completed: false,
  },
  {
    title: 'Revalidation',
    description: 'Revalidate the cache when updating todos.',
    completed: false,
  },
  {
    title: 'Server Components',
    description: 'Use server components to fetch data.',
    completed: false,
  },
];
const enemies = [
  {
    name: 'Hetfield the Harbinger',
  },
  {
    name: 'Osbourne the Ominous',
  },
  {
    name: 'Mustaine the Malicious',
  },
  {
    name: 'Halford the Howler',
  },
  {
    name: 'Dio the Dreaded',
  },
];

async function main() {
  // first delete all todos
  await prisma.todos.deleteMany();
  for (const todo of todos) {
    await prisma.todos.create({
      data: {
        title: todo.title,
        description: todo.description,
        completed: todo.completed,
      },
    });
  }
  // first delete all enemies
  await prisma.enemies.deleteMany();
  for (const enemy of enemies) {
    await prisma.enemies.create({
      data: {
        name: enemy.name,
      },
    });
  }
}
main()
  .then(async () => {
    console.log('Seed complete');
    await prisma.$disconnect();
    process.exit(0);
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
