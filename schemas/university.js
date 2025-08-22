export default {
  name: 'university',
  title: 'University',
  type: 'document',
  fields: [
    { name: 'Universityname', title: 'UniversityName', type: 'string',validation: Rule => Rule.required() },
    {
      name: 'logo',
      title: 'logo (512×512) ',
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

      return width === 512 && height === 512
        ? true
        : `Image must be exactly 512×512 pixels. Uploaded image is ${width}×${height} pixels.`;
    })},

    { name: 'contentTitle', title: 'Content Title(Present over banner Image)', type: 'string',validation: Rule => Rule.required() },
    { name: 'subtitle', title: 'Sub Title(Present over banner Image)', type: 'string',validation: Rule => Rule.required() },
    {
      name: 'bannerimage',
      title: 'Banner Image (to be decided) ',
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
      title: 'Form Image (to be decided) ',
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
      title: 'Main Image (to be decided)(present in content) ',
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
    // {
    //   name: 'scholarship',
    //   title: 'Scholarship',
    //   type: 'reference',
    //   to: [{ type: 'scholarship' }],
    //   validation: Rule => Rule.required()
    // },
    {
      name: 'course',
      title: 'Course',
      type: 'reference',
      to: [{ type: 'course' }],
      validation: Rule => Rule.required()
    },
    
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
    { name: 'reportYear', title: 'Year of Data Updates(presented in Home Screen)', type: 'string' },
    { name: 'metaDescription', title: 'Meta Description(present in Home screen)', type: 'string' },
    { name: 'metaTitle', title: 'Meta Title(present in Home screen)', type: 'string' },
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
