import { defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  type: 'document',
  title: 'Testimonial',
  fields: [
    { name: 'name', type: 'string', title: 'Name' },
    {
      name: 'profilePic',
      type: 'image',
      title: 'Profile Picture',
      options: { hotspot: true },
      fields: [
        {
          name: 'altText',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility'
        },
        {
          name: 'program',
          type: 'string',
          title: 'Designation / Program'
        }
      ]
    },
    { name: 'testimonial', type: 'text', title: 'Testimonial Text' },
    { name: 'institute', type: 'string', title: 'Select Institute' },
    { name: 'placeOfStudy', type: 'string', title: 'Place of Study' }
  ]
})
