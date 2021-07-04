/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
// tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
module.exports = {
  docs: [
    "intro",
    {
      type: "category",
      label: "commands",
      collapsed: false,
      items: [{ type: "autogenerated", dirName: "commands" }],
    },
    {
      type: "category",
      label: "guides",
      collapsed: false,
      items: [{ type: "autogenerated", dirName: "guides" }],
    },
    {
      type: "category",
      label: "links",
      collapsed: false,
      items: [
        {
          type: "link",
          label: "Invite Malil to your server",
          href: "https://discord.com/oauth2/authorize?client_id=749020331187896410&permissions=117824&scope=bot%20applications.commands",
        },
        {
          type: "link",
          label: "join the support server",
          href: "https://discord.gg/mY8zTARu4g",
        },
      ],
    },
  ],
};
