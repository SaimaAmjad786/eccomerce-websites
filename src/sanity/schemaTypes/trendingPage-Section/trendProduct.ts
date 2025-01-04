export default {
    title: "Trend Product",
    name:"trendProduct",
    type: "document",
    fields: [
        {
            title: 'Sections',
            name: 'sections',
            type: 'array',
            of: [
                {
                    type:'cartsSection',
                },
            ]
        },
    ]
}