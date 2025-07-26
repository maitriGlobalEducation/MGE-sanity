

export default {
  name: 'speaker',
  title: 'Speaker',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required().error('Name is required'),
    },
    {
      name: 'designation',
      title: 'Designation',
      type: 'string',
      validation: Rule => Rule.required().error('Designation is required'),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule =>
        Rule.required()
          .error('Email is required')
          .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
            name: 'email', 
            invert: false,
          }),
    },
    {
      name: 'contactNumber',
      title: 'Contact Number',
      type: 'string',
      validation: Rule =>
        Rule.required()
          .error('Contact number is required')
          .regex(/^[6-9]\d{9}$/, {
            name: 'Indian phone number',
            invert: false,
          }),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required().error('Image is required'),
    },
  ],
};
