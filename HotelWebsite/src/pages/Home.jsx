import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
        <Hero />
        <FeaturedDestination />
        <ExclusiveOffers/>
        <Testimonial />
    </>
  )
}

export default Home
