import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const kritikRouter = createTRPCRouter({
  getById: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.kritik.findMany({
      where: {
        id: input,
      },
    });
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.kritik.findMany();
  }),
  // mutate: publicProcedure.mutation("create-kritik", {
  //   input: z.object({
  //     kritik: z.string(),
  //   }),
  //   resolve: async ({ ctx, input }) => {
  //     const result = await ctx.prisma.kritik.create({
  //       data: {
  //         kritik: input.kritik,
  //       },
  //     });
  //     return result;
  //   }
  // })
});
