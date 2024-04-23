export default {
  name: 'reviews',
  type: 'document',
  title: 'Reviews',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Author name',
    },
    {
      name: 'review',
      type: 'text',
      title: 'Review',
    },
    {
      name: 'project',
      type: 'string',
      title: 'Project name',
    },
    {
      name: 'icon',
      type: 'image',
      title: 'Project authir avatar',
    },
  ],
}
