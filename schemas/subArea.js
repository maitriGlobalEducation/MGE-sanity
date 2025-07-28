export default {
  name: 'subArea',
  title: 'Sub Area',
  type: 'document',
  fields: [
    { name: 'area', title: 'Area', type: 'reference', to: [{ type: 'area' }] },
    { name: 'subAreaName', title: 'Sub Area Name', type: 'string' },
    { name: 'areaImage', title: 'Area Image', type: 'image' }
  ]
}
