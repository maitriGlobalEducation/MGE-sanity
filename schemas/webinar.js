export default {
  name: 'webinar',
  title: 'Webinar',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'date', title: 'Date', type: 'datetime' },
    { name: 'time', title: 'Time', type: 'string' },
    { name: 'selectStatus', title: 'Select Status', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'formType', title: 'Form Type', type: 'string' },
    { name: 'webinarPrice', title: 'Webinar Price', type: 'number' },
    { name: 'webinarImage', title: 'Webinar Image', type: 'image' },
    { name: 'meetingLink', title: 'Meeting Link', type: 'url' },
    { name: 'preferredLanguage', title: 'Preferred Language', type: 'string' },
    { name: 'duration', title: 'Duration', type: 'string' },
    { name: 'metaTitle', title: 'Meta Title', type: 'string' },
    { name: 'metaDescription', title: 'Meta Description', type: 'text' },
    { name: 'successDescription', title: 'Success Description', type: 'text' },
    { name: 'metaKeywords', title: 'Meta Keywords', type: 'array', of: [{ type: 'string' }] },
    { name: 'firstSection', title: 'First Section', type: 'text' },
    { name: 'secondSection', title: 'Second Section', type: 'text' },
    { name: 'thirdSection', title: 'Third Section', type: 'text' },
    { name: 'fourthSection', title: 'Fourth Section', type: 'text' },
    {
      name: 'aiSeoKeywords',
      title: 'AI SEO Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      },
      description: 'Paste AI-generated keywords here (e.g., from ChatGPT)',
    },
    { name: 'email', title: 'Email', type: 'email' }
  ]
}
