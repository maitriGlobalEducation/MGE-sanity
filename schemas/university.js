export default {
  name: 'University',
  title: 'University',
  type: 'document',
  fields: [
    { name: 'Universityname', title: 'UniversityName', type: 'string',validation: Rule => Rule.required() },
      
    { name: 'contentTitle', title: 'Content Title(Present over banner Image)', type: 'string',validation: Rule => Rule.required() },
    { name: 'subtitle', title: 'Sub Title(Present over banner Image)', type: 'string',validation: Rule => Rule.required() },
    {
      name: 'bannerimage',
      title: 'Banner Image (300×295) ',
      type: 'image',
      options: {
       hotspot: true
      },
      validation: Rule =>
        Rule.required().custom((image) => {
          if (!image?.asset) return true;

            const dims = image.asset?.metadata?.dimensions;
          if (!dims) {
     
          return true;
            }

      const { width, height } = dims;

      return width === 300 && height === 295
        ? true
        : `Image must be exactly 300×295 pixels. Uploaded image is ${width}×${height} pixels.`;
    })
},
    {
      name: 'form',
      title: 'Form Drop Down',
      type: 'reference',
      to: [{ type: 'form' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'formimage',
      title: 'Form Image (300×295) ',
      type: 'image',
      options: {
       hotspot: true
      },
      validation: Rule =>
        Rule.required().custom((image) => {
          if (!image?.asset) return true;

            const dims = image.asset?.metadata?.dimensions;
          if (!dims) {
     
          return true;
            }

      const { width, height } = dims;

      return width === 300 && height === 295
        ? true
        : `Image must be exactly 300×295 pixels. Uploaded image is ${width}×${height} pixels.`;
    })
},

    { name: 'fieldofstudy', title: 'Field of study', type: 'array', of: [{ type: 'string' }] , to: [{ type: 'area' }] },
    {
      name: 'mainimage',
      title: 'Main Image (300×295)(present in content) ',
      type: 'image',
      options: {
       hotspot: true
      },
      validation: Rule =>
        Rule.required().custom((image) => {
          if (!image?.asset) return true;

            const dims = image.asset?.metadata?.dimensions;
          if (!dims) {
     
          return true;
            }

      const { width, height } = dims;

      return width === 300 && height === 295
        ? true
        : `Image must be exactly 300×295 pixels. Uploaded image is ${width}×${height} pixels.`;
    })
},{ name: 'introduction', title: 'Introduction', type: 'text' },
    { name: 'campus', title: 'Campus', type: 'reference', to: [{ type: 'campus' }] },
    
    { name: 'relatedlinks', title: 'Related Links', type: 'array', of: [{ type: 'string' }] },
    { name: 'content', title: 'Content', type: 'text' },
    
    {
      name: 'metaKeywords',
      title: 'Meta Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    { name: 'metaDescription', title: 'Meta Description', type: 'string' },
    { name: 'metaTitle', title: 'Meta Title', type: 'string' },
     {
      name: 'focusKeywords',
      title: 'Focus Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'seoKeywords',
      title: 'SEO Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }
    
  ]
}
