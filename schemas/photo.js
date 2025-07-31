export default {
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
    { name: 'albumName', title: 'Album Name', type: 'string' },
    { name: 'photoName', title: 'Photo Name', type: 'string' },
    { name: 'image', title: 'Image', type: 'image' }
  ]
}
