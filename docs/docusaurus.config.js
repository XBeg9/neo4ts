module.exports = {
  title: 'Neo4TS',
  tagline: 'Typescript packages for Neo4j Graph Database',
  url: 'https://xbeg9.github.io/neo4ts/',
  baseUrl: '/neo4ts/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'XBeg9', // Usually your GitHub org/user name.
  projectName: 'neo4ts', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Neo4TS',
      items: [
        {
          href: 'https://github.com/XBeg9/neo4ts',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/neo4ts',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/XBeg9/neo4ts',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Neo4ts, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/XBeg9/neo4ts/edit/master/website/',
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}]],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      },
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        // Plugin options
        inputFiles: ['../packages/builder/src'],
        stripInternal: true,
        excludeProtected: true,
        docsRoot: 'docs',
        out: 'api',
        readme: 'none',
        sidebar: {
          sidebarFile: 'typedoc-sidebar.js',
          globalsLabel: 'Globals',
          fullNames: false,
        },
        globalsTitle: 'Overview',

        // TypeDoc options (see typedoc --help)
        mode: 'file',
        target: "es2017",
        moduleResolution: "node"
      },
    ],
  ],
};
