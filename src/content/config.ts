import {defineCollection, z} from "astro:content";

export const collections = {
  'blog': defineCollection({
    schema: z.object({
      author: z.string(),
      dateAuthored: z.string(),
      description: z.string(),
      title: z.string(),
      tags: z.array(z.string())
    })
  })
};
