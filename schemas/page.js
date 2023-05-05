export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'about_us_content',
      title: 'About Us Content',
      type: 'array',
      of: [
        { type: 'block' }
      ]
    },
    {
      name: 'about_us_heading',
      title: 'About Us Heading',
      type: 'string'
    },
    {
      name: 'about_us_image',
      title: 'About Us Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'services_content',
      title: 'Services Content',
      type: 'array',
      of: [
        { type: 'block' }
      ]
    },
    {
      name: 'gallery_content',
      title: 'Gallery Content',
      type: 'array',
      of: [
        { type: 'block' }
      ]
    }
  ]
}