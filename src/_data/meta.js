module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'Kyle Chisholm',
  siteDescription: 'A maker and creative robotics engineer.',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Kyle Chisholm', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: '', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: 'https://kylechisholm.com', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#01F9C6', //  Manifest: defines the default theme color for the application
  themeBgColor: '#202020', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg', // fallback/default meta image
    opengraph_default_alt: 'Kyle Chisholm personal website post', // alt text for default meta image
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the site
    mastodonProfile: '' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
  },
  blog: {
    // this is for the rss feed
    name: 'Kyle Chisholm\'s Maker Feed',
    description:
    'Projects, guides, and code related to robotics, DIY, and interactive art.'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'Kyle Chisholm',
    street: '',
    city: 'Montreal',
    state: 'Quebec',
    zip: '',
    mobileDisplay: '',
    mobileCall: '',
    email: '',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
