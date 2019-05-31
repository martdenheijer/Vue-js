export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'Vue-js-studio',
                  apiId: 'f05866a5-d97a-4f96-abcc-6890f306013a'
                },
                {
                  buildHookId: '5cf165120b2000017dee8b32',
                  title: 'Events Website',
                  name: 'Vue-js',
                  apiId: '0eb4486c-3955-4bf8-be81-ca8ef16cfbc6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/martdenheijer/Vue-js',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://Vue-js.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
