/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "PAACS Documentation",
  tagline: "Documentation for PAACS Software",
  url: "https://PAACS-Software.github.io",  // URL to your GitHub Pages site
  baseUrl: "/Docs/",  // Set this to "/" if you want the site to be served from the root
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/PAACS_logo.ico",
  organizationName: "PAACS-Software",  // GitHub organization name
  projectName: "Docs",  // The repository name (just "Docs")
  
  themeConfig: {
    announcementBar: {
        id: 'customisation_block',
        content: 'These pages are still under construction',
        backgroundColor: '#f3a07a',
        textColor: '#fff',
        isCloseable: false,
    },
    navbar: {
      title: "PAACS Documentation",
      logo: {
        alt: "PAACS Logo",
        src: "img/PAACS_logo.svg",
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
              href: "https://example.com/forum",  // Replace with actual URL when available
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
            `https://github.com/PAACS-Software/Docs/edit/main/docs/docs/${docPath}`,  // Edit URL should point to your repo
          routeBasePath: "/",  // Serve the docs at the site's root
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

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        indexDocs: true,
        indexPages: true,
      },
    ],
  ],
};
