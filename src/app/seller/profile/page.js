"use client"

import Profile from '@/components/shared/Profile/Profile'
import React from 'react'

const page = () => {

    const data = {
          firstname : 'Rahul',
          lastname : 'Sharma',
          email : 'rahulsharma@abc.com',
          phone : 8531531346,
          city : 'Pune',
          region : 'Aundh-Baner',
          address : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
          capacity : 500
    }

    const saveDetails = (details) =>{
        console.log('Edited user details:', details)
    }

  return (
    <div>
        <Profile user={'seller'} profileData={data} saveDetails={saveDetails}/>
    </div>
  )
}

export default page
