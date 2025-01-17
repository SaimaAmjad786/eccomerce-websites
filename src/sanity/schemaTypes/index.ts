import { type SchemaTypeDefinition } from 'sanity'
import featureproduct from './homepage_section/featureproduct'
import trendingproduct from './homepage_section/trendingproduct'
import discountitem from './homepage_section/discountitem'
import blog from './homepage_section/blog'
// import trendProduct from './trendingPage-Section/trendProduct'
// import cartsSection from './trendingPage-Section/cartsSection'
// import latestProduct from './productPage-Section/latestProduct'
// import cardSection from './productPage-Section/cardSection'
import trendingsProduct from './productsPage-Section/trendingsProduct'
import cardsSection from './productsPage-Section/cardsSection'
import product from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,featureproduct,trendingproduct,discountitem,blog,trendingsProduct,cardsSection],
}
