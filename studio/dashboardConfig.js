export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    { name: 'structure-menu' },
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
                  buildHookId: '5ce2b99bc0d58946888d1732',
                  title: 'Sanity Studio',
                  name: 'MFE-Website-studio',
                  apiId: '44f0758c-805e-42be-b032-cf751a5a1d97'
                },
                {
                  buildHookId: '5ce2b99b76ada7d5dc3e4ffc',
                  title: 'Portfolio Website',
                  name: 'MFE-Website',
                  apiId: '4378e323-1330-4fc0-b1f8-47270ee1a048'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jamie-endeavour/MFE-Website',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://MFE-Website.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent Events', order: '_createdAt desc', types: ['event'] },
      layout: { width: 'medium' }
    }
  ]
}
