import { CheckIcon } from 'lucide-react';
import { Badge } from './ui/badge';
import { Skeleton } from './ui/skeleton';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';

function TodoCountSkeleton() {
  return (
    <div className="flex h-[60px] items-center border-b px-6">
      <span className="font-semibold">Todo</span>
      <Badge className="ml-auto">...</Badge>
    </div>
  );
}
function TodoListSkeleton() {
  return (
    <nav className="grid items-start px-4 text-sm font-medium">
      <Skeleton className="flex h-6 items-center gap-3 rounded-lg bg-gray-200 px-3 py-2 text-gray-900 ">
        <CheckIcon className="h-4 w-4" />
      </Skeleton>
      <Skeleton className="flex h-6 items-center gap-3 rounded-lg bg-gray-200 px-3 py-2 text-gray-900 ">
        <CheckIcon className="h-4 w-4" />
      </Skeleton>
      <Skeleton className="flex h-6 items-center gap-3 rounded-lg bg-gray-200 px-3 py-2 text-gray-900 ">
        <CheckIcon className="h-4 w-4" />
      </Skeleton>
      <Skeleton className="flex h-6 items-center gap-3 rounded-lg bg-gray-200 px-3 py-2 text-gray-900 ">
        <CheckIcon className="h-4 w-4" />
      </Skeleton>
      <Skeleton className="flex h-6 items-center gap-3 rounded-lg bg-gray-200 px-3 py-2 text-gray-900 ">
        <CheckIcon className="h-4 w-4" />
      </Skeleton>
    </nav>
  );
}

function TodoSkeleton(){
  return (
    <Card>
    <CardHeader>
      <Skeleton className="flex w-full h-20 " />
    </CardHeader>
    <CardContent>
    <Skeleton className="flex w-full h-80 " />

    </CardContent>
    <CardFooter>
      <Skeleton className="flex w-full h-8 " />
      <Skeleton className="flex w-full h-8 " />
    </CardFooter>
  </Card>
  )
}

export { TodoListSkeleton, TodoCountSkeleton, TodoSkeleton };
