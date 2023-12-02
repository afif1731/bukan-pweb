/** @type {import('payload/types').CollectionConfig} */

const Logs = {
    slug: 'loogg',
    access: {
        create: () => true,
        read: () => true,
        delete: () => true
    },
    fields: [
        {
            name: 'koleksi',
            type: 'text',
            required: true
        },
        {
            name: 'aksi',
            type: 'text',
            required: true
        },
        {
            name: 'timestamp',
            type: 'date',
            required: true
        }
    ]
}

export default Logs