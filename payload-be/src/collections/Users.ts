import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'adminname',
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'adminname',
      type: 'text',
      required: true
    }
  ],
}

export default Users
