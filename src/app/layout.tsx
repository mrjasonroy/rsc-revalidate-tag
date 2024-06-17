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
          {todos}
          {children}
          {enemies}
          <GithubLink />
        </div>
      </body>
    </html>
  );
}
