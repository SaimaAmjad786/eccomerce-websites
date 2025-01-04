import { type SchemaTypeDefinition } from 'sanity'
import featureproduct from './homepage_section/featureproduct'
import trendingproduct from './trendingproduct'
import discountitem from './discountitem'
import blog from './blog'
import about from './about'
import trendProduct from './trendingPage-Section/trendProduct'
import cartsSection from './trendingPage-Section/cartsSection'
import latestProduct from './productPage-Section/latestProduct'
import cardSection from './productPage-Section/cardSection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [featureproduct,trendingproduct,discountitem,blog,about,trendProduct,cartsSection,latestProduct,cardSection],
}
