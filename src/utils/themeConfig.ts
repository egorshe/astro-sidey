// src/utils/themeConfig.ts

import { z } from "astro/zod"
import { sideyConfig } from "@config"

const configSchema = z.object({
  site: z.object({
    title: z.string(),
    description: z.string(),
    url: z.url(),
    author: z.string(),
    locale: z.string().default("en"),
  }),
  layout: z.object({
    sidebarPosition: z.enum(["left", "right"]),
    maxContentWidth: z.string().default("65ch"),
    fontStack: z.enum(["sans", "serif", "mono"]).default("sans"),
    postsPerPage: z.number().default(10),
  }),
  navigation: z.array(
    z.object({
      label: z.string(),
      href: z.string(),
    })
  ),
  theme: z.object({
    defaultMode: z.enum(["light", "dark"]).default("light"),
    allowToggle: z.boolean().default(true),
  }),
})

const parseResult = configSchema.safeParse(sideyConfig)

if (!parseResult.success) {
  console.error("\n❌ Configuration Error in sidey.config.ts:")

  parseResult.error.issues.forEach((err) => {
    console.error(`[${err.path.join(".")}] - ${err.message}`)
  })

  console.error("\n")
  process.exit(1)
}

export const config = parseResult.data
