import CommaKeywordsInput from './CommaKeywordsInput.jsx'


export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'date', title: 'Date', type: 'datetime' },
    { name: 'subtitle', title: 'subtitle', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    {
      name: 'homescreenbuttons',
      title: 'Homescreen Buttons',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }},






     {
      name: 'form',
      title: 'Form Drop Down',
      type: 'reference',
      to: [{ type: 'form' }],
      validation: Rule => Rule.required()
    },
    
    { name: 'eventType', title: 'Event Type', type: 'string' },
    { name: 'image', title: 'Image(1600*1200)', type: 'image' },
    { name: 'banner', title: 'Banner', type: 'image' },
    { name: 'metaTitle', title: 'Meta Title', type: 'string' },
    { name: 'metaKeywords', title: 'Meta Keywords', type: 'array', of: [{ type: 'string' }] },
    { name: 'metaDescription', title: 'Meta Description', type: 'text' },
    { name: 'successDescription', title: 'Success Description', type: 'text' },
    { name: 'selectStatus', title: 'Select Status', type: 'string' },
    { name: 'eventPrice', title: 'Event Price', type: 'number' },
    { name: 'emailSubject', title: 'Email Subject', type: 'string' },
    {
      name: 'aiSeoKeywords',
      title: 'AI SEO Keywords',
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
    // {
    //   name: 'aiSeoKeywords',
    //   title: 'AI SEO Keywords',
    //   type: 'array',
    //   of: [{ type: 'string' }],
    //   options: {
    //     layout: 'tags'
    //   },
    //   description: 'Paste AI-generated keywords here (e.g., from ChatGPT)',
    // },
    { name: 'emailDescription', title: 'Email Description', type: 'text' }
  ]
}
