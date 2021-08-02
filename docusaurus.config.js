/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Aethor",
  tagline: "Aethor the all in one discord bot",
  url: "https://aethor.floppa.info/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",
  organizationName: "Aethorbot", // Usually your GitHub org/user name.
  projectName: "Aethorbot.github.io", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Aethor",
      logo: {
        alt: "Aethor logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://discord.gg/zwUQGAG4cP",
          label: "Support",
          position: "right",
        },
        {
          href: "https://discord.com/oauth2/authorize?client_id=870383692403593226&permissions=117824&scope=bot%20applications.commands",
          label: "Invite",
          position: "right",
        },
        {
          href: "https://github.com/aethorbot/aethorbot.github.io/",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Docs",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/zwUQGAG4cP",
            },
            {
              label: "Top.gg",
              href: "https://top.gg/bot/870383692403593226",
            },
            {
              label: "Bots.gg",
              href: "https://discord.bots.gg/bots/870383692403593226",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/Aethorbot/Aethor",
            },
            {
              label: "Terms",
              href: "https://Aethorbot.github.io/terms",
            },
            {
              label: "Privacy",
              href: "https://Aethorbot.github.io/privacy",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aethor, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Aethorbot/Aethorbot.github.io/edit/master/website/",
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
