/**
 * Talk Object
 * This is used with events, events will contain a collection
 * of talks.
 */

export default {
  name: 'talk',
  title: 'Talk',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'speaker',
      title: 'Speaker',
      type: 'reference',
      to: [{ type: 'person' }]
    },
    {
      name: 'synopsis',
      title: 'Synopsis',
      type: 'simplePortableText'
    }
  ]
}
