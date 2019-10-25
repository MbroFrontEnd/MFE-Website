export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'advancedPortableText'
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'mainImage'
    },
    prepare({ title = 'No title', slug }) {
      const path = `/${slug.current}/`
      return {
        title,
        subtitle: slug ? path : 'Missing page slug'
      }
    }
  }
}
