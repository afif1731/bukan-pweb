import payload from 'payload';
import { isPayloadAdmin } from '../access/isPayloadAdmin';
/** @type {import('payload/types').CollectionConfig} */

const Blogers = {
    slug: 'bloger',
    auth: true,
    admin: {
        useAsTitle: 'username',
    },
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
                    koleksi: `BLOGER::${args.result.id}`,
                    aksi: "CREATE",
                    timestamp: new Date()
                }
            })
        }
        }],
        afterChange: [async (args) => {
            if (args.previousDoc.username != undefined) {
                payload.create({
                    collection: "loogg",
                    data: {
                        koleksi: `BLOGER::${args.previousDoc.id}`,
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
                    koleksi: `BLOGER::${args.doc.id}`,
                    aksi: "DELETE",
                    timestamp: new Date()
                }
            })
        }]
    },
    fields: [
        {
            name: 'username',
            type: 'text',
            required: true
        },
        {
            name: 'userrole',
            type: 'select',
            saveToJWT: true,
            hasMany: false,
            defaultValue: 'Reader',
            access: {
                create: isPayloadAdmin,
                update: isPayloadAdmin
            },
            options: [
                {
                    label: 'Reader',
                    value: 'reader'
                },
                {
                    label: 'Admin',
                    value: 'admin'
                },
                {
                    label: 'Editor',
                    value: 'editor'
                }
            ],

        }
    ]
}

export default Blogers