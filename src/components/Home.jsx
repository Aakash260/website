import React from 'react'
import CommonComponent from './CommonComponent'
import Services from './Services'
import FeaturedProducts from './FeaturedProducts'
const Home = () => {
  return (
    <>
    <CommonComponent pageName={"Home Page"} />
    <Services />
<FeaturedProducts/>
    </>
  )
}

export default Home