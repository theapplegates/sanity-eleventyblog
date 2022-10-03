export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '633b68883751b006807745b5',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventyblog-studio',
                  apiId: '765c7108-6a6e-41af-8834-fa5cccdcfb44'
                },
                {
                  buildHookId: '633b6888abc9ec05576e0d44',
                  title: 'Blog Website',
                  name: 'sanity-eleventyblog',
                  apiId: 'cc7a4d05-94a2-4e45-b4c2-a6a0c182c80a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/theapplegates/sanity-eleventyblog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventyblog.netlify.app', category: 'apps'}
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
