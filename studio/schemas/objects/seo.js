export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add additional keywords for SEO purposes.',
      of: [{ type: 'string' }],
      options: { layout: 'tags' }
    }
  ]
}
