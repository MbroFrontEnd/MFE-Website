import MdEvent from 'react-icons/lib/md/event'

export default {
  name: 'event',
  type: 'document',
  title: 'Event',
  icon: MdEvent,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontend will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
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
    },
    {
      name: 'introduction',
      title: 'Introduction',
      description: 'This is the introduction that will be presented on the homepage',
      type: 'simplePortableText'
    },
    {
      name: 'body',
      title: 'Body',
      description: 'The main body. This is displayed on the single event template',
      type: 'advancedPortableText'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'figure'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
