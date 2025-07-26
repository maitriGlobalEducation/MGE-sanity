export default {
  name: 'blogType',
  title: 'Blog Type',
  type: 'document',
  fields: [
    {
      name: 'creationDate',
      title: 'Creation Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'type',
      date: 'creationDate'
    },
    prepare(selection) {
      const { title, date } = selection;
      return {
        title: title,
        subtitle: `Created on ${new Date(date).toLocaleDateString()}`
      };
    }
  }
}