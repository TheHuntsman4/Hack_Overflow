// This is the layout for the Profile search reuslts

import React from 'react'
import { Profile_Card } from '../components'

const Profiles = () => {
    const domains = ['webdev', 'frontend', 'AI', 'ML', 'WEB 3'];
  return (
    <div className='grid grid-cols-2 gap-[1.5rem] md:grid-cols-3'>
        <Profile_Card  domains={domains}/>
        <Profile_Card  domains={domains}/>
        <Profile_Card  domains={domains}/>
        <Profile_Card  domains={domains}/>

      
    </div>
  )
}

export default Profiles
