import payload from 'payload';
/** @type {import('payload/types').CollectionConfig} */

const Blogs = {
    slug: 'blog',
    access: {
        create: () => true,
        read: () => true,
        update: () => true,
        delete: () => true
    },
    hooks: {
        afterOperation: [async (args) => { if(args.operation == "create") {
            payload.create({
                collection: "loogg",
                data: {
                    koleksi: `BLOG::${args.result.id}`,
                    aksi: "CREATE",
                    timestamp: new Date()
                }
            })
        }
        }],
        afterChange: [async (args) => {
            if (args.previousDoc.judulblog != undefined) {
                payload.create({
                    collection: "loogg",
                    data: {
                        koleksi: `BLOG::${args.previousDoc.id}`,
                        aksi: "UPDATE",
                        timestamp: new Date()
                    }
                })
            }
        }],
        afterDelete: [async (args) => {
            payload.create({
                collection: "loogg",
                data: {
                    koleksi: `BLOG::${args.doc.id}`,
                    aksi: "DELETE",
                    timestamp: new Date()
                }
            })
        }]
    },
    fields: [
        {
            name: 'judulblog',
            type: 'text',
            maxLength: 100,
            required: true
        },
        {
            name: 'blogimg',
            type: 'upload',
            relationTo: 'media',
            required: true
        },
        {
            name: 'thistp',
            type: 'relationship',
            relationTo: 'toppick',
            required: true
        },
        {
            name: 'kontenblog',
            type: 'richText',
            required: true
        },
        {
            name: 'uploader',
            type: 'relationship',
            relationTo: 'bloger',
            required: true
        }
    ]
}

export default Blogs