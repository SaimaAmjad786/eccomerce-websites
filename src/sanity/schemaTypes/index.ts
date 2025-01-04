import { type SchemaTypeDefinition } from 'sanity'
import featureproduct from './featureproduct'
import trendingproduct from './trendingproduct'
import discountitem from './discountitem'
import blog from './blog'
import about from './about'
import trendProduct from './trendingPage-Section/trendProduct'
import cartsSection from './trendingPage-Section/cartsSection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [featureproduct,trendingproduct,discountitem,blog,about,trendProduct,cartsSection],
}
