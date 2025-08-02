import { defineType } from 'sanity'

export default defineType({
  name: 'subMenu',
  type: 'document',
  title: 'Sub Menu',
  fields: [
    { name: 'parent', type: 'reference', to: [{ type: 'mainMenu' }], title: 'Parent Menu' },
    { name: 'label', type: 'string', title: 'Label' },
    { name: 'link', type: 'url', title: 'Link' },
    { name: 'order', type: 'number', title: 'Order' }
  ]
})
