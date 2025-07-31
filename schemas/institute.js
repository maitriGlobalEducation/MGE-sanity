export default {
  name: 'institute',
  title: 'Institute',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'logo', title: 'Logo', type: 'image' },
    { name: 'area', title: 'Area', type: 'reference', to: [{ type: 'area' }] },
    { name: 'brand', title: 'Brand', type: 'reference', to: [{ type: 'brand' }] },
    { name: 'campus', title: 'Campus', type: 'reference', to: [{ type: 'campus' }] },
    { name: 'contentTitle', title: 'Content Title', type: 'string' },
    { name: 'banner', title: 'Banner', type: 'image' },
    { name: 'content', title: 'Content', type: 'text' },
    { name: 'openInNewTab', title: 'Open in New Tab', type: 'boolean' },
    { name: 'metaKeywords', title: 'Meta Keywords', type: 'string' },
    { name: 'metaDescription', title: 'Meta Description', type: 'string' },
    { name: 'metaTitle', title: 'Meta Title', type: 'string' },
    { name: 'hasRanking', title: 'Page Has Ranking?', type: 'boolean' },
    {
      name: 'highlights',
      title: 'Highlights',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'keyFeatures', title: 'Key Features', type: 'text' }
      ]
    }
  ]
}
