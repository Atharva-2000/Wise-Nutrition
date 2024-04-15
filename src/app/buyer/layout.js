import NonLoginedBuyerNavbar from '@/components/Buyer/TopNavigation/NonLoginedBuyerNavBar/NonLoginedBuyerNavbar'
import React from 'react'

const BuyerLayout = ({children}) => {
  return (
    <div>
       <NonLoginedBuyerNavbar/>
       {children}
    </div>
  )
}

export default BuyerLayout
