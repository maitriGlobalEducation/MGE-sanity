import { defineType } from 'sanity'

export default defineType({
  name: 'videoTestimonial',
  type: 'document',
  title: 'Video Testimonial',
  fields: [
    { name: 'name', type: 'string', title: 'Name' },
    {
      name: 'type',
      type: 'string',
      title: 'Type',
      options: { list: ['Student', 'Parent', 'Alumni'] }
    },
    { name: 'videoUrl', type: 'url', title: 'Video URL' },
    {
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail Image',
      options: { hotspot: true },
      fields: [
        {
          name: 'altText',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility'
        }
      ]
    },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'institute', type: 'string', title: 'Select Institute' },
    { name: 'placeOfStudy', type: 'string', title: 'Place of Study' }
  ]
})
