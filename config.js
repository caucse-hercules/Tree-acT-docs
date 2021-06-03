const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://treeact.cc',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo:
      'https://pixabay.com/get/gea11c7bce51b55baee0c11fc281f6de9e436dba1818ab4b0a4a342adc5dfec0eadade0888616d883b3b9dd18eba052f0.svg',
    logoLink: 'https://treeact.cc',
    title: 'Tree-acT DOCS',
    githubUrl: 'https://github.com/caucse-hercules/Tree-acT',
    helpUrl: '',
    tweetText: '',
    // social: `<li>
    //     <a href="https://twitter.com/hasurahq" target="_blank" rel="noopener">
    //       <div class="twitterBtn">
    //         <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
    //       </div>
    //     </a>
    //   </li>
    // 	<li>
    //     <a href="https://discordapp.com/invite/hasura" target="_blank" rel="noopener">
    //       <div class="discordBtn">
    //         <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
    //       </div>
    //     </a>
    //   </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Get Tree-acT', link: 'https://github.com/caucse-hercules/Tree-acT' }],
    frontline: false,
    ignoreIndex: true,
    // title:
    //   "<a href='https://hasura.io/learn/'>graphql </a><div class='greenCircle'></div><a href='https://hasura.io/learn/graphql/react/introduction/'>react</a>",
  },
  siteMetadata: {
    title: 'Tree-acT | Generate your react project with Tree',
    description: 'Learn how to use Tree-acT',
    ogImage: null,
    docsLocation: 'https://github.com/caucse-hercules/Tree-acT-page/tree/master/content',
    favicon:
      'https://pixabay.com/get/g18ad6eda480065d06cfb869112b70fc95928e43ad6df1303c6e3d6127ce5dab57a1ca9fca19758bb34813157b04e9b66.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
