import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const books = defineCollection({
  schema: z.object({
    title: z.string(),
    series: z.string().default("Age of Reclamation"),
    order: z.number(),
    subtitle: z.string().optional(),
    status: z.enum(["draft", "beta", "editing", "published"]).default("draft"),
    coverImage: z.string().optional(),
    synopsis: z.string(),
    links: z
      .object({
        amazon: z.string().url().optional(),
        goodreads: z.string().url().optional(),
      })
      .optional(),
  }),
});

const world = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["magic", "calendar", "locations", "pantheon", "peoples", "history"]),
    order: z.number().default(0),
  }),
});

export const collections = { blog, books, world };
