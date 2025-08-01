import { defineType } from 'sanity'

export default defineType({
  name: 'coachingCategory',
  type: 'document',
  title: 'Coaching Category',
  fields: [
    { name: 'name', type: 'string', title: 'Category Name' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'name', maxLength: 96 } }
  ]
})
