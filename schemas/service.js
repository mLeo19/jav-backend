export default {
    name: 'service',
    type: 'document',
    title: 'Service',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90
        }
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string'
      },
      {
        name: 'link',
        title: 'Link',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'array',
        of: [
          { type: 'block' }
        ]
      },
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true
        }
      }
    ]
  }