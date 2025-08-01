export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'serviceName',
      title: 'Service Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'type',
      title: 'Type',
      type: 'reference',
      to: [{ type: 'serviceType' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'othersPrice',
      title: 'Others Price',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'image1',
      title: 'Image 1',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'image2',
      title: 'Image 2',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string'
    },
    {
      name: 'metaKeywords',
      title: 'Meta Keywords',
      type: 'string'
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text'
    },
    {
      name: 'successDescription',
      title: 'Success Description',
      type: 'text'
    }
  ]
}
