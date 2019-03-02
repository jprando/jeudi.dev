module.exports = {
  title: ' Jeudi Prando ',
  description: 'algumas coisas que aprendi',
  serviceWorker: true,
  head: [
    ['meta', { httpEquiv: 'Content-Language', content: 'pt-br' }],
    ['meta', { name: 'language', content: 'Portuguese' }],
    ['meta', { name: 'generator', content: 'vuepress' }],
    ['meta', { name: 'no-email-collection', content: 'unspam.com' }],
    ['meta', { name: 'rating', content: 'general' }],
    ['meta', { name: 'author', content: 'Jeudi Prando' }],
    ['meta', { name: 'contact', content: 'jeudiprando@gmail.com' }]
  ],
  markdown: { lineNumbers: true },
  themeConfig: {
    // nav: [{ text: 'Início', link: '/' }],
    lastUpdated: true, // 'Last Updated'
    repo: 'jprando/jeudi.dev',
    editLinks: true,
    editLinkText: 'Ajude-nos a melhorar esta página!',
    serviceWorker: {
      updatePopup: {
        message: 'Novo conteúdo está disponível.',
        buttonText: 'Atualizar'
      }
    }
  }
}
