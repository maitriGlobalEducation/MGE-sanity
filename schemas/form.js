

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
          { title: 'Study Abroad', value: 'Study-Abroad' },
          { title: 'Career Guidance', value: 'Career-Guidance' },
          { title: 'Scholarship & Student loan', value: 'Scholarship-&-Student-loan' },
          { title: 'International Transfer', value: 'International-Transfer' },
          { title: 'Early bird offer', value: 'Early-bird-offer' },
          { title: 'Year of Planning', value: 'Year-of-planning' },
          { title: 'Intake-batch', value: 'Intake-batch' },
          { title: 'Counselling area', value: 'Counselling-area' },
          { title: 'Time of counselling', value: 'Time-of Counselling' },
          
        ],
        layout: 'checkbox'
      },
      validation: Rule => Rule.required().min(1)
    }
  ]
};
