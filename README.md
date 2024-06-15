# RSC Revalidate Tag Example - NextJS

This is an example of how to use the RSC Revalidate Tag in a NextJS project.

## Getting Started

You will need a postgres database service somewhere, I didn't include a docker. I used neon.tech for the example on vercel

- Update .env.local with your database connection strings, there is an example .env.example
- run `pnpm install` to install the dependencies
- run `pnpm run db:generate` to generate the prisma client
- run `pnpm run db:migrate` to run the migrations
- run `pnpm run db:seed` to seed the database
- run `pnpm dev` to start the development server

## What are we looking at?

This simple site has a really basic "todo" list and a list of "enemies". They are separate in both data structures and UI. When you update either the todo the enemies list, the entire RSC tree revalidates, which can be observce by the "state update" counter below each list. You can also see the new data in the RSC payload.

## Why did I make this?

I was trying to show that you could use revalidateTag or revlidatePath without the whole page refreshing but it turns out I was wrong. If we are truly going to move to fetching and revalidating data on the server, we will need more fine grained control over the revalidation process. This is a simple example of how it isn't working now.

## Branches

- The main branch is the example the revalidate tag. Working example [here](https://rsc-revalidate-tag.vercel.app/)
- The `revalidate-path` branch is the example with the revalidate path and parallel routes. Working example [here](https://rsc-revalidate-jk3plcyuc-mrjasonroys-projects.vercel.app/)

## Learn More

The nextjs documentation for [revalidatePath](https://nextjs.org/docs/app/api-reference/functions/revalidatePath) and [revalidateTag](https://nextjs.org/docs/app/api-reference/functions/revalidateTag) are a good places to start. However, you can see that in the revalidatePath documentation, it mentions the entire router cache is invalidated and this will be updated in the future. I imagine this fine grained control will be added in an upcoming release but I believe it is important for it to be added sooner rather than later if we are going to move to a more server side rendering model. Without this, we are left to fetch data from the client through useSWR or React Query and we lose the benefits of the much of RSC model.
