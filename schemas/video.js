export default {
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    { name: 'videoName', title: 'Video Name', type: 'string' },
    { name: 'youtubeUrl', title: 'YouTube URL', type: 'url' },
    { name: 'videoThumbnail', title: 'Video Thumbnail', type: 'image' }
  ]
}
