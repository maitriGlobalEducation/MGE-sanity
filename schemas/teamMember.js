import { defineType } from 'sanity'

export default defineType({
  name: 'teamMember',
  type: 'document',
  title: 'Team Member',
  fields: [
    { name: 'name', type: 'string', title: 'Full Name' },
    { name: 'designation', type: 'string', title: 'Designation' },
    { name: 'profilePic', type: 'image', title: 'Profile Picture' },
    { name: 'bio', type: 'text', title: 'Short Bio' },
    { name: 'email', type: 'string', title: 'Email' },
    { name: 'linkedin', type: 'url', title: 'LinkedIn Profile' },
    { name: 'isActive', type: 'boolean', title: 'Is Active', initialValue: true }
  ]
})
