import CommaKeywordsInput from './CommaKeywordsInput.jsx'
export default {
  name: 'AddPage',
  title: 'Add Page',
  type: 'document',
  fields: [
    {
      name: 'route',
      title: 'Route Path',
      type: 'string',
      description: 'Path of the new route, e.g. /contact-us or /apply-now',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'Title shown in the browser tab and meta tags',
      validation: Rule => Rule.required()
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'SEO meta description for the route',
      rows: 3
    },
    {
      name: 'metaKeywords',
      title: 'Meta Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags' // gives you a tag input UI
      },
      description: 'Enter comma-separated keywords. They will be split into tags automatically.',
      components: {
        input: CommaKeywordsInput
      }
    },
   
    {
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Image for social media sharing (Facebook, LinkedIn, etc.)',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'form',
      title: 'Form Drop Down',
      type: 'reference',
      to: [{ type: 'form' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: true,
      description: 'Whether this route is live on the site'
    }
  ]
}
