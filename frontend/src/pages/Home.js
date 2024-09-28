import React, { useEffect } from 'react'
import Main from '../components/Home/Main'
import About from '../components/Home/About/About'
import ProductDisplay from '../components/Home/ProductDisplay/ProductDisplay'
import BoxEngagement from '../components/Home/BoxEngagement/BoxEngagement'
import LoveLetters from '../components/Home/LoveLetters/LoveLetters'
import Contact from '../components/Home/Contact/Contact'
import About2 from '../components/Home/About2/About2'

const Home = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Main/>
      <About/>
      {/* <ProductDisplay/> */}
      <BoxEngagement/>
      {/* <About2/> */}
      {/* <LoveLetters/> */}
      {/* <Contact/> */}
    </div>
  )
}

export default Home