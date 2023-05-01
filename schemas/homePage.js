export default {
    name: 'home_page',
    title: 'Home Page',
    type: 'document',
    fields: [
      {
        name: 'about_us_content',
        title: 'About Us Content',
        type: 'array',
        of: [
          { type: 'block' }
        ]
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