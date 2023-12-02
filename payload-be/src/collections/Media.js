import payload from 'payload';
/** @type {import('payload/types').CollectionConfig} */

const Media = {
    slug: 'media',
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
                    koleksi: `MEDIA::${args.result.id}`,
                    aksi: "CREATE",
                    timestamp: new Date()
                }
            })
        }
        }],
        afterDelete: [async (args) => {
            payload.create({
                collection: "loogg",
                data: {
                    koleksi: `MEDIA::${args.doc.id}`,
                    aksi: "DELETE",
                    timestamp: new Date()
                }
            })
        }]
    },
    upload: {
        staticURL: '/media',
        staticDir: '../../nuxt-fe/public/media',
        imageSizes: [
            {
                name: 'thumbnail',
                width: 200,
                height: 200,
                position: 'centre'
            },
            {
                name: 'konten',
                width: undefined,
                height: 500,
                position: 'centre'
            }
        ],
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*']
    }
}

export default Media