import React from 'react'
import Newsletter from '../Components/Newsletter/Newsletter'
import Help1 from '../Components/Helphome/Help1'
import Faq from '../Components/Faqhome/Faq'
import Homepart2 from '../Components/Homepart/Homepart2'
import Homepart1 from '../Components/Homepart/Homepart1'
import Hometext1 from '../Components/Homepart/Hometext1'
import Hometext2 from '../Components/Homepart/Hometext2'

const Home = () => {
  return (
    <div>
      <Homepart2/>
      <Homepart1/>
      <Help1/>
      <Hometext1/>
      <Faq/>
      <Hometext2/>
      <Newsletter/>
    </div>
  )
}

export default Home
