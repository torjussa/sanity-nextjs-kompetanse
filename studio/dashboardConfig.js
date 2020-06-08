export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ede62f743ebac7b0439ac7d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-kompetanse-studio',
                  apiId: '48c76b5b-8dc0-49a3-8077-feea85a6a410'
                },
                {
                  buildHookId: '5ede62f743ebac5df939b124',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-kompetanse',
                  apiId: '4ec65fb2-3c0c-4334-93dc-bfb605655a7b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/torjussa/sanity-nextjs-kompetanse',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-kompetanse.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
