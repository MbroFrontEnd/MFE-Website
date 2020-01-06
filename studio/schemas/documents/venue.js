import MdLocationCity from 'react-icons/lib/md/location-city'

export default {
  name: 'venue',
  type: 'document',
  title: 'Venue',
  icon: MdLocationCity,
  fields: [
    {
      name: 'name',
      type: 'string',
      titel: 'Name'
    },
    {
      name: 'address',
      type: 'address',
      title: 'Address'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'mapLink',
      type: 'url',
      title: 'Map Link',
      description: 'Link to Google Maps'
    },
    {
      name: 'active',
      type: 'boolean',
      title: 'Current Venue'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    }
  ]
}
