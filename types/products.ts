
export interface Product {
    _id: string;
    name: string;
    type: 'product';
    image?: {
        asset: {
            _ref: string;
            _type: 'image';
        };
    };
    price: number;
    description?: string;
    discountPercentage: number;
    slug: {
        _type: 'slug';
        current: string;
    };
}
