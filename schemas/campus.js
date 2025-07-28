export default {
  name: 'campus',
  title: 'Campus',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'image', title: 'Image', type: 'image' },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
      options: {
        list: [
          { title: 'India', value: 'India' },
          { title: 'United States', value: 'United States' },
          { title: 'United Kingdom', value: 'United Kingdom' },
          { title: 'Canada', value: 'Canada' },
          { title: 'Australia', value: 'Australia' },
          { title: 'Germany', value: 'Germany' },
          { title: 'France', value: 'France' },
          { title: 'Singapore', value: 'Singapore' },
          { title: 'Japan', value: 'Japan' },
          { title: 'UAE', value: 'UAE' },
          { title: 'Italy', value: 'Italy' }
          // Add more countries as needed
        ]
      }
    },
    { name: 'location', title: 'Location', type: 'string' }
  ]
}
