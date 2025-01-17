export default {
    title: 'cards section',
    name: 'cardsSection',
    type: 'object',

    fields: [
        {
            title: 'Card',
            name: 'card',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            title: 'Card Image',
                            name: 'cardImg',
                            type: 'image',
                        },
                        {
                            title: 'card Heading',
                            name: 'cardHeading',
                            type: 'string',
                        },
                        {
                            title: 'card Price',
                            name: 'cardPrice',
                            type: 'number',
                        },
                        {
                            title: 'card oldPrice',
                            name: 'cardoldPrice',
                            type: 'number',
                        },
                    ]
                }
            ]
        }
    ]
}