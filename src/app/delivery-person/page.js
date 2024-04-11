'use client'

import Login from '@/components/shared/Login/Login'
import React, { useState } from 'react'
import styles from './DeliveryPerson.module.scss'
import SignUp from '@/components/shared/SignUp/SignUp'

const page = () => {

    const [currentPage, setCurrentPage] = useState('login')

  return (
    <div className={styles.login_page}>
        {
            currentPage==='login' ? (
                <Login user={'delivery-person'} changePage={setCurrentPage}/>
            ):(
                <SignUp user={'delivery-person'} changePage={setCurrentPage}/>
            )
        }
    </div>
  )
}

export default page
