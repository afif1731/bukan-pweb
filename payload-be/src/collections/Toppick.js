import payload from 'payload';
/** @type {import('payload/types').CollectionConfig} */

const Toppick = {
    slug: 'toppick',
    admin: {
        useAsTitle: 'tpname',
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
                    koleksi: `TP::${args.result.id}`,
                    aksi: "CREATE",
                    timestamp: new Date()
                }
            })
            if(args.result.tpslug != args.result.tpname.toLowerCase()) {
                payload.update({
                    collection: 'toppick',
                    id: `${args.result.id}`,
                    data: {
                        tpslug: `${args.result.tpname.toLowerCase()}`
                    }
                })
            }
        }
        }],
        afterChange: [async (args) => {
            if (args.previousDoc.tpname != undefined) {
                payload.create({
                    collection: "loogg",
                    data: {
                        koleksi: `TP::${args.previousDoc.id}`,
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
                    koleksi: `TP::${args.doc.id}`,
                    aksi: "DELETE",
                    timestamp: new Date()
                }
            })
        }]
    },
    fields: [
        {
            name: 'tpname',
            type: 'text',
            maxLength: 20,
            required: true
        },
        {
            name: 'tpslug',
            type: 'text',
            maxLength: 20,
            required: true
        }
    ]
}

export default Toppick