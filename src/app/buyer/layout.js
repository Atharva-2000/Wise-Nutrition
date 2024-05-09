import LoginedBuyerNavbar from '@/components/Buyer/TopNavigation/LoginedBuyerNavbar/LoginedBuyerNavbar'
import NonLoginedBuyerNavbar from '@/components/Buyer/TopNavigation/NonLoginedBuyerNavBar/NonLoginedBuyerNavbar'
import { token } from '@/utils/constants'
import React from 'react'

const BuyerLayout = ({children}) => {
  return (
    <div>
      {
           token ? <LoginedBuyerNavbar/> : <NonLoginedBuyerNavbar/>
      }
       {children}
    </div>
  )
}

export default BuyerLayout
