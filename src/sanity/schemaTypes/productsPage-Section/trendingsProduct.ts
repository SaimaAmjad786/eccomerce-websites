export default {
    title: "Trendings Product",
    name:"trendingsProduct",
    type: "document",
    fields: [
        {
            title: 'Sections',
            name: 'sections',
            type: 'array',
            of: [
                {
                    type:'cardsSection',
                },
            ]
        },
    ]
}