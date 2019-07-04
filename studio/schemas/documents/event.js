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
      name: 'eventDate',
      title: 'Event Date',
      description: 'The date of the event',
      type: 'datetime'
    },
    {
      title: 'Is this the featured event?',
      name: 'featuredEvent',
      type: 'boolean'
    },
    {
      title: 'Is event on sale?',
      name: 'onSale',
      type: 'boolean'
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo'
    },
    {
      name: 'introduction',
      title: 'Introduction',
      description: 'This is the synopsis that will be presented on the homepage',
      type: 'simplePortableText'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'figure'
    },
    {
      title: 'Talks',
      name: 'talks',
      type: 'array',
      of: [{ type: 'talk' }]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
