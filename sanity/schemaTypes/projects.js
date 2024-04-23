export default {
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Project title',
    },
    {
      title: 'Project description',
      name: 'blockEditor',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'images',
      type: 'array',
      title: 'Project images',
      of: [{type: 'image'}],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'SEO description',
    },
  ],
}
