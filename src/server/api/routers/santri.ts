import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const santriRouter = createTRPCRouter({
  getById: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.santri.findMany({
      where: {
        id: input,
      },
    });
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.santri.findMany();
  }),
});
