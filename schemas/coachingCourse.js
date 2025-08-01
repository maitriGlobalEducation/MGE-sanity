import { defineType } from 'sanity'

export default defineType({
  name: 'coachingCourse',
  type: 'document',
  title: 'Coaching Course',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'category', type: 'reference', to: [{ type: 'coachingCategory' }], title: 'Category' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'duration', type: 'string', title: 'Duration' },
    { name: 'image', type: 'image', title: 'Course Image' },
    { name: 'brochure', type: 'file', title: 'Brochure PDF' }
  ]
})
