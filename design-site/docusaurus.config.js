const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  // ...
  plugins: ['@docusaurus/theme-live-codeblock',
    '@docusaurus/plugin-ideal-image',
    require.resolve('./webpkconfig.js'),
    require.resolve('@easyops-cn/docusaurus-search-local')],

  themeConfig: {
    liveCodeBlock: {
      /**
           * The position of the live playground, above or under the editor
           * Possible values: "top" | "bottom"
           */
      playgroundPosition: 'bottom'
    },
    hideableSidebar: true
  },
  // ...
  title: 'Pipeline UI',
  tagline: 'Integrating Algorand and React',
  url: 'https://pipeline-ui.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'headline-design', // Usually your GitHub org/user name.
  projectName: 'pipeline-ui', // Usually your repo name.
  // eslint-disable-next-line no-dupe-keys
  themeConfig: {
    // highlight-start
    // highlight-end.
    announcementBar: {
      id: 'announcementBar-1', // Increment on change
      content:
        '⭐️ If you like PIPELINE-UI, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/headline-design/pipeline-ui">GitHub</a>! ⭐',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: false // Defaults to `true`.
    },
    docs: {
      sidebar: {
        hideable: true
      }
    },
    navbar: {
      title: 'PIPELINE-UI',
      logo: {
        alt: 'PIPELINE Logo',
        src: 'img/logo.svg'
      },
      items: [
        {
          type: 'doc',
          docId: 'getting-started-B',
          position: 'left',
          label: 'Getting Started'
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: 'showcase', label: 'Algo Bridge', position: 'left'},
        {
          href: 'https://github.com/headline-design',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started-B'
            },
            {
              label: 'PIPELINE FAQ',
              to: '/docs/faq'
            },
            {
              label: 'Philosophy',
              to: '/docs/About/philosophy'
            },
            {
              label: 'Videos',
              to: '/docs/videos'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Developer Portal',
              href: 'https://developer.algorand.org/ecosystem-projects/#pipeline'
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/algorand'
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/pipeline_ui'
            },
            {
              label: 'Contact us',
              href: '/docs/About/contact'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/headline-design'
            },
            {
              html: `
                  <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                    <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
                  </a>
                `
            }
          ]
        }
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/footer-algorand.svg',
        width: 350,
        height: 80,
        href: 'https://developer.algorand.org'
      },
      copyright: `Copyright © ${new Date().getFullYear()} HEADLINE INC. Built with PIPELINE-UI, Carbon Design, and Docusaurus.`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
              'https://github.com/headline-design/pipeline-ui/blob/main/design-site'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
              'https://headline.dev/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
