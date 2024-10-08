/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "PAACS Documentation",
  tagline: "Documentation for PAACS Software",
  url: "https://PAACS-Software.github.io/Docs",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/drupal.ico",
  organizationName: "PAACS Software Ltd",
    projectName: "https://github.com/PAACS-Software/Docs.git",
  themeConfig: {
    announcementBar: {
        id: 'customisation_block',
        content:
          'These pages are still under construction',
        backgroundColor: '#f3a07a',
        textColor: '#fff',
        isCloseable: false,
      },
    navbar: {
      title: "PAACS Documentation",
      logo: {
        alt: "PAACS Logo",
        src: "img/drupal-logo.svg",
      },
      items: [
        {
          to: "/",
          activeBasePath: "docs",
          label: "Getting Started",
          position: "left",
        },
        {
            href: "https://github.com/PAACS-Software/Docs",
          label: "Git",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "PAACS Logo",
        src: "img/logoV1.png",
        height: "40px",
      },
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/",
            },
          ],
        },
        {
          title: "Outreach",
          items: [
            {
              label: "Socials",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Forum",
              href: "https://example.com/forum",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PAACS Software Ltd.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: ({ docPath }) =>
            `https://github.com/PAACS-Software/Docs/${docPath}`,
          //path: 'docs',
          routeBasePath: "/", // Serve the docs at the site's root
          breadcrumbs: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  // from https://github.com/easyops-cn/docusaurus-search-local
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
	indexDocs: true, // Default is true, but let's force it
	indexPages: true,

        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
  ],
};
