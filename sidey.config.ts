// sidey.config.ts

export const sideyConfig = {
  site: {
    title: "Odhy Pradhana",
    description: "Minimalist personal log and digital garden.",
    url: "https://odhyp.com",
    author: "Odhy Pradhana",
    locale: "en",
  },
  layout: {
    sidebarPosition: "left" as "left" | "right",
    maxContentWidth: "65ch",
    fontStack: "sans" as "sans" | "serif" | "mono",
    postsPerPage: 10,
  },
  navigation: [
    { label: "Writings", href: "/writings" },
    { label: "Now", href: "/now" },
    { label: "About", href: "/about" },
    { label: "RSS", href: "/rss.xml" },
  ],
  theme: {
    defaultMode: "light" as "light" | "dark",
    allowToggle: true,
  },
}

export type SideyConfigType = typeof sideyConfig
