module.exports = {
  title: ' Jeudi Prando ',
  description: 'algumas coisas que aprendi',
  head: [
    ['meta', { httpEquiv: 'Content-Language', content: 'pt-br' }],
    ['meta', { name: 'language', content: 'Portuguese' }],
    ['meta', { name: 'generator', content: 'vuepress' }],
    ['meta', { name: 'no-email-collection', content: 'unspam.com' }],
    ['meta', { name: 'rating', content: 'general' }],
    ['meta', { name: 'author', content: 'Jeudi Prando' }],
    ['meta', { name: 'contact', content: 'jeudiprando@gmail.com' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }]
  ],
  markdown: { lineNumbers: true },
  ga: 'UA-135465871-1',
  serviceWorker: true,
  themeConfig: {
    nav: [{ text: 'Contato', link: '/contato.md' }],
    lastUpdated: true, // 'Last Updated'
    repo: 'jprando/jeudi.dev',
    editLinks: true,
    editLinkText: 'editar esta página!',
    serviceWorker: {
      updatePopup: {
        message: 'Novo conteúdo está disponível.',
        buttonText: 'Atualizar'
      }
    }
  }
}
