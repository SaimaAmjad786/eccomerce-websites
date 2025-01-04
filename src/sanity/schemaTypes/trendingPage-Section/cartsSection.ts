export default {
    title: 'carts section',
    name: 'cartsSection',
    type: 'object',

    fields: [
        {
            title: 'Cart',
            name: 'cart',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            title: 'Cart Image',
                            name: 'cartImg',
                            type: 'image',
                        },
                        {
                            title: 'cart Heading',
                            name: 'cartHeading',
                            type: 'string',
                        },
                        {
                            title: 'cart Price',
                            name: 'cartPrice',
                            type: 'number',
                        }]
                }
            ]
        }
    ]
}