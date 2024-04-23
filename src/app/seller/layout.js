import SellerNavbar from '@/components/Seller/TopNavigation/SellerNavbar'
import { token } from '@/utils/constants'
import React from 'react'

const SellerLayout = ({children}) => {

  return (
    <div>
        {
           token && <SellerNavbar/>
        }
        {children}
    </div>
  )
}

export default SellerLayout
