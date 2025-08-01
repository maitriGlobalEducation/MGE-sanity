import { defineType } from 'sanity'

export default defineType({
  name: 'pagefeature',
  type: 'document',
  title: 'Add Page',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'heading', type: 'string', title: 'Heading' },

    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        { type: 'block' }, // normal text block
        {
          type: 'object',
          name: 'linkSection',
          title: 'Link Section',
          fields: [
            { name: 'label', type: 'string', title: 'Link Label' },
            { name: 'url', type: 'url', title: 'URL' }
          ]
        },
        {
          type: 'object',
          name: 'formSection',
          title: 'Form Section',
          fields: [
            { name: 'formTitle', type: 'string', title: 'Form Title' },
            { name: 'formEmbedCode', type: 'text', title: 'Form Embed Code' }
          ]
        },
        {
          type: 'object',
          name: 'servicesSection',
          title: 'Services Section',
          fields: [
            { name: 'title', type: 'string', title: 'Section Title' },
            {
              name: 'services',
              type: 'array',
              title: 'Services',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'name', type: 'string', title: 'Service Name' },
                    { name: 'description', type: 'text', title: 'Description' },
                    { name: 'icon', type: 'image', title: 'Icon' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title', maxLength: 96 } },

    // Optional SEO Fields
    {
      name: 'metaDescription',
      type: 'string',
      title: 'Meta Description',
      description: 'Short description for SEO purposes'
    },
    {
      name: 'metaImage',
      type: 'image',
      title: 'Meta Image',
      description: 'Image used for social sharing (OG image)'
    }
  ]
})
