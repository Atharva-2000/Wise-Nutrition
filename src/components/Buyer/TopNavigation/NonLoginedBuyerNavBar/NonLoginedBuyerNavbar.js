"use client"

import React, { useState } from 'react'
import styles from './../../../../styles/Navbar.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import BuyerLoginModal from '../../Login/BuyerLoginModal'
import BuyerSignUpModal from '../../SignUp/BuyerSignUpModal'
import Logo from '@/components/shared/Logo/Logo'

const NonLoginedBuyerNavbar = () => {

  const pathname = usePathname()

  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false)

  const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false)

  const handleLoginModalVisiblity = ()=>{
      setIsLoginModalVisible(!isLoginModalVisible)
  }

  const handleSignUpModalVisiblity = ()=>{
    setIsSignUpModalVisible(!isSignUpModalVisible)
  }


  return (
    <div className={styles.topNavigation}>
        <Logo/>
        <div className={styles.menu_container}>
            <div className={pathname==='/buyer' ? styles.active_menu_item : styles.menu_item}>
                <Link href={"/buyer"} className={styles.menu_item_link}>Home</Link>
            </div>
            <div className={pathname==='/buyer/faq' ? styles.active_menu_item : styles.menu_item}>
                <Link href={"/buyer/faq"} className={styles.menu_item_link}>FAQs</Link>
            </div>
            <div className={styles.menu_item}>
                <a href={"#"} className={styles.menu_item_link} onClick={()=>{handleLoginModalVisiblity()}}>Log In</a>
            </div>
            <div className={styles.menu_item}>
                <a href={"#"} className={styles.menu_item_link} onClick={()=>{handleSignUpModalVisiblity()}}>Sign Up</a>
            </div>
        </div>

        <BuyerLoginModal isVisible={isLoginModalVisible} handleLoginModalVisiblity={handleLoginModalVisiblity}/>
        <BuyerSignUpModal isVisible={isSignUpModalVisible} handleSignUpModalVisiblity={handleSignUpModalVisiblity}/>
    </div>
  )
}

export default NonLoginedBuyerNavbar
