export default {
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'courseCategory', title: 'Course Category', type: 'reference', to: [{ type: 'courseCategory' }] },
    { name: 'area', title: 'Area', type: 'reference', to: [{ type: 'area' }] },
    { name: 'subArea', title: 'Sub Area', type: 'reference', to: [{ type: 'subArea' }] },
    { name: 'institute', title: 'Institute', type: 'reference', to: [{ type: 'university' }] },
    { name: 'duration', title: 'Duration of Course', type: 'string' },
    { name: 'durationFeatures', title: 'Duration Features', type: 'string' },
    { name: 'campus', title: 'Campus', type: 'reference', to: [{ type: 'campus' }] },
    { name: 'intake', title: 'Intake', type: 'string' },
    { name: 'language', title: 'Language', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' }
  ]
}
