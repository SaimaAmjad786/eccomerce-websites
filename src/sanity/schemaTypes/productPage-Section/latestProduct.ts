export default {
    title: "Latest Product",
    name:"latestProduct",
    type: "document",
    fields: [
        {
            title: 'Sections',
            name: 'sections',
            type: 'array',
            of: [
                {
                    type:'cardSection',
                },
            ]
        },
    ]
}