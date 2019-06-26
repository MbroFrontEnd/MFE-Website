import MdLabel from 'react-icons/lib/md/label'

export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  icon: MdLabel,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    }
  ]
}
