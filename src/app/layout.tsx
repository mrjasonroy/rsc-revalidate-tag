import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React, { Suspense } from 'react';
import { CreateTodoDialog } from '@/components/create-todo-dialog';
import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import { EnemiesLoader } from '@/components/loaders/enemies-loader';
import { TodoCountSkeleton, TodoListSkeleton } from '@/components/skeletons';
import { TodoCountLoader } from '@/components/loaders/todo-count-loader';
import { TodoListLoader } from '@/components/loaders/todo-list-loader';
import { GithubLink } from '@/components/github-link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RSC Todo App - Revalidate Tag',
  description: 'A simple todo app with revalidate tag',
};

export default function RootLayout({
  children,
  todos,
  enemies,
}: Readonly<{
  children: React.ReactNode;
  todos: React.ReactNode;
  enemies: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr_280px]">
          <div className="hidden border-r bg-gray-100/40 lg:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
              {todos}
            </div>
          </div>
          <div className="flex flex-col">
            <header className="flex h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 lg:h-[60px]">
              <CreateTodoDialog>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <PlusIcon className="h-4 w-4" />
                  <span className="sr-only">Add Todo</span>
                </Button>
              </CreateTodoDialog>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
              <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">Todo</h1>
              </div>
              {children}
            </main>
          </div>
          <div className="hidden border-l bg-sky-300/10 lg:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-[60px] items-center border-b px-6">
                <span className="font-semibold">Enemies</span>
              </div>
              <div className="flex-1 overflow-auto py-2">
                <nav className="grid items-start px-4 text-sm font-medium">
                  {enemies}
                </nav>
              </div>
            </div>
          </div>
        </div>
        <GithubLink />
      </body>
    </html>
  );
}
