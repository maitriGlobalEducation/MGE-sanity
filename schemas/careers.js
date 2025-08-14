export default {
  name: 'careers',
  title: 'Careers',
  type: 'document',
  fields: [
       { name: 'title', title: 'Title', type: 'string' },
    { name: 'subtitle', title: 'Sub Title', type: 'string' },
    { name: 'image', title: 'Image', type: 'image',options: {
            hotspot: true
        } },
        {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }
      ]
    }
