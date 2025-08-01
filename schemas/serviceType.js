export default {
  name: 'serviceType',
  title: 'Service Type',
  type: 'document',
  fields: [
    {
      name: 'typeName',
      title: 'Type Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'about',
      title: 'About',
      type: 'text',
      validation: Rule => Rule.required()
    }
  ]
}
