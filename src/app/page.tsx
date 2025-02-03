import React from 'react';
import TopBar from './components/navbar';
import Services from './components/services';
import HeroSection from './components/hero';
import Header from './components/header';
import Trendingproduct from './components/trendingproduct';
import Trending from './components/trending';
import Discountitem from './components/discountitem';
import Category from './category/page';
import Blog from './components/blog';
import OffersSection from './components/offersection';
import NewsletterSection from './components/newslettersection';
import Featureproducts from './featureproducts/page';
import LatestProduct from './latestproduct/page';
;

function page() {
  return (
    <div>
  
  <TopBar/>
     <Header/> 
     <HeroSection/>
     <Featureproducts/>
     <LatestProduct/>
     <Services/>
     <Trendingproduct/>
     <Trending/>
     <OffersSection/>
     <Discountitem/>
     <NewsletterSection/>
     <Category/>
     <Blog/>
    </div>
  )
}

export default page

