export default {
  widgets: [
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
                  buildHookId: '5f60a2d9d759b70086250bfd',
                  title: 'Sanity Studio',
                  name: 'sanity-project-studio',
                  apiId: 'a1fc51a3-70ae-43e6-8a75-83aedea75238'
                },
                {
                  buildHookId: '5f60a2e6ffcb3900d7bb4933',
                  title: 'Blog Website',
                  name: 'sanity-project',
                  apiId: '5c49e15a-ef79-4387-ba03-aada53b67ee4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/32ed/sanity-project',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-project.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
