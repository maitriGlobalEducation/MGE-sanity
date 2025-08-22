export default {
  name: 'blog',
  title: 'Blogs',
  type: 'document',
  fields: [
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'course',
      title: 'Course',
      type: 'string'
    },
    {
      name: 'blogType',
      title: 'Blog Type',
      type: 'reference',
      to: [{ type: 'blogType' }],
      validation: Rule => Rule.required()
    },
   {
  name: 'image',
  title: 'Image (Size (1600 x 1200)',
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

      return width === 1600 && height === 1200
        ? true
        : `Image must be exactly 1600x1200 pixels. Uploaded image is ${width}×${height} pixels.`;
    })
},
    {
      name: 'video',
      title: 'Video',
      type: 'file',
      options: {
        accept: 'video/*'
      }
    },
    {
      name: 'videoAltText',
      title: 'Video Alt Text',
      type: 'string'
    },
    {
      name: 'imageAltText',
      title: 'Image Alt Text',
      type: 'string'
    },
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      validation: Rule => Rule.max(60).warning('Meta title should be under 60 characters for better SEO')
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      validation: Rule => Rule.max(160).warning('Meta description should be under 160 characters for better SEO')
    },
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
    },
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
    {
      name: 'logContent',
      title: 'Log Content Elements',
      type: 'object',
      fields: [
        {
          name: 'hasImages',
          title: 'Image Notes',
          type: 'string'
        },
        {
          name: 'hasTables',
          title: 'Table Notes',
          type: 'string'
        },
        {
          name: 'hasVideos',
          title: 'Video Notes',
          type: 'string'
        },
        {
          name: 'hasCTA',
          title: 'CTA Button Notes',
          type: 'string'
        },
        {
          name: 'hasLinks',
          title: 'Link Notes',
          type: 'string'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'authorName',
      media: 'image',
      date: 'date'
    },
    prepare(selection) {
      const { title, author, media, date } = selection;
      return {
        title: title,
        subtitle: `By ${author} - ${new Date(date).toLocaleDateString()}`,
        media: media
      };
    }
  }
}
