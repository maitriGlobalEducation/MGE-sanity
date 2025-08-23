
import CommaKeywordsInput from './CommaKeywordsInput.jsx'


export default {
  name: 'scholarship',
  title: 'Scholarship',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
   {
  name: 'image',
  title: 'Image (1920x1080)',
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
      name: 'tagline',
      title: 'tagline',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'string',
      // validation: Rule => Rule.required()
    },
    {
  name: 'university',
  title: 'University',
  type: 'reference',
  to: [{ type: 'university' }], // this should match the schema name in university.js
  validation: Rule => Rule.required(),
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    },
  ]
},
    {
      name: 'deadline',
      title: 'Deadline',
      type: 'datetime',
    },
    {
      name: 'awardedBy',
      title: 'Awarded By',
      type: 'string',
    },
   
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
    // {
    //   name: 'metaKeywords',
    //   title: 'Meta Keywords',
    //   type: 'array',
    //   of: [{ type: 'string' }],
    //   options: { layout: 'tags' },
    //   validation: Rule => Rule.required()
    // },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      validation: Rule => Rule.max(160)
    },
    {
      name: 'form',
      title: 'Form Drop Down',
      type: 'reference',
      to: [{ type: 'form' }],
      validation: Rule => Rule.required()
    }
  ]
};
