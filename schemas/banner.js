import { defineType } from 'sanity'

export default defineType({
  name: 'banner',
  type: 'document',
  title: 'Banner',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'subtitle', type: 'string', title: 'Subtitle' },
    { name: 'image', type: 'image', title: 'Image' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'ctaLabel', type: 'string', title: 'CTA Label' },
    { name: 'ctaLink', type: 'url', title: 'CTA Link' }
  ]
})
