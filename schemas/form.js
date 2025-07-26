

export default {
  name: 'form',
  title: 'Form',
  type: 'document',
  fields: [
    {
      name: 'formName',
      title: 'Form Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'fields',
      title: 'Fields Selection',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      options: {
        list: [
          { title: 'CV/Portfolio', value: 'cvPortfolio' },
          { title: 'Interested Course', value: 'interestedCourse' },
          { title: 'Name', value: 'Name' },
          { title: 'college', value: 'College' },
          { title: 'Phone-Number', value: 'Number' },
          { title: 'Email', value: 'Email' },
          { title: 'Country', value: 'Country' },
          { title: 'Year of graduation', value: 'Year-of-Graduation' },
          
        ],
        layout: 'checkbox'
      },
      validation: Rule => Rule.required().min(1)
    }
  ]
};
