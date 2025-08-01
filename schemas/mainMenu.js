import { defineType } from 'sanity'

export default defineType({
  name: 'mainMenu',
  type: 'document',
  title: 'Main Menu',
  fields: [
    { name: 'label', type: 'string', title: 'Label' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'label', maxLength: 96 } },
    { name: 'order', type: 'number', title: 'Order' }
  ]
})
