import { type SchemaTypeDefinition } from 'sanity'
import featureproduct from './homepage_section/featureproduct'
import trendingproduct from './homepage_section/trendingproduct'
import discountitem from './homepage_section/discountitem'
import blog from './homepage_section/blog'
import cardsSection from './productsPage-Section/cardsSection'
import product from './product'
import trendingsProduct from './productsPage-Section/trendingsProduct'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,featureproduct,trendingproduct,discountitem,blog,trendingsProduct,cardsSection],
}
