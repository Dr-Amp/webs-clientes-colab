import { defineCollection, z } from 'astro:content';

const ctaSchema = z.object({
  label: z.string(),
  href: z.string(),
  kind: z.enum(['primary', 'secondary', 'whatsapp', 'phone', 'email']).default('primary'),
});

const landings = defineCollection({
  type: 'content',
  schema: z.object({
    business: z.object({
      name: z.string(),
      legalName: z.string().optional(),
      sector: z.string(),
      city: z.string(),
      province: z.string().optional(),
      country: z.string().default('ES'),
    }),
    seo: z.object({
      title: z.string().max(70),
      description: z.string().max(180),
      canonical: z.string().url().optional(),
      robots: z.string().default('noindex, nofollow'),
    }),
    localization: z.object({
      locale: z.string().default('es-ES'),
      timezone: z.string().default('Europe/Madrid'),
      areaServed: z.array(z.string()).default([]),
    }),
    ctas: z.array(ctaSchema).min(1),
    status: z.enum(['draft', 'demo', 'proposal', 'client-ready']).default('draft'),
    rawDemoPath: z.string().optional(),
    notes: z.array(z.string()).default([]),
  }),
});

export const collections = { landings };
