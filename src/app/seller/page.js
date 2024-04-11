'use client'

import Login from '@/components/shared/Login/Login'
import React, { useState } from 'react'
import styles from './Seller.module.scss'
import SignUp from '@/components/shared/SignUp/SignUp'

const page = () => {

    const [currentPage, setCurrentPage] = useState('login')

  return (
    <div className={styles.login_page}>
        {
            currentPage==='login' ? (
                <Login user={'seller'} changePage={setCurrentPage}/>
            ):(
                <SignUp user={'seller'} changePage={setCurrentPage}/>
            )
        }
    </div>
  )
}

export default page
