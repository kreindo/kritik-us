import { createTRPCRouter } from "./trpc";
import { kritikRouter } from "./routers/kritik";
import { santriRouter } from "./routers/santri";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  kritik: kritikRouter,
  santri: santriRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
