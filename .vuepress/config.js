module.exports = {
  title: ' Jeudi Prando ',
  description: 'compartilhando algumas coisas que aprendi',
  serviceWorker: true,
  head: [
    ['meta', { name: 'author', content: 'Jeudi Prando' }],
    ['meta', { name: 'keywords', content: 'desenvolvimento' }]
  ],
  themeConfig: {
    nav: [{ text: 'Início', link: '/' }],
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
