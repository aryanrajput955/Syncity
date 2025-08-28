'use client'
import React from 'react'
import HeroSection from './components/hero'
import OurVisionSection from './components/vision'
import CTASection from './components/cta'
import WhyWeStartedSection from './components/whywestarted'

import OneStationGallerySection from './components/onestation'

const page = () => {
  return (
<>
<HeroSection />
<WhyWeStartedSection />

<OurVisionSection />
{/* <OneStationGallerySection /> */}
<CTASection />
</>
  )
}

export default page