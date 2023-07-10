import FeatureCard from '@/components/FeatureCard'
import { Feed } from '@/components/Feed'
import Header from '@/components/Header'
import React from 'react'

const index = () => {
  return (
    <div>
      <Header/>
      <FeatureCard/>
      <section>
        <Feed />
      </section>
       </div>
  )
}

export default index