"use client"

import React from 'react'
import styles from '../../../styles/Navbar.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import notificationIcon from '../../../assets/notification-icon.svg'
import profileIcon from '../../../assets/profile-icon.svg'
import userIcon from '../../../assets/user-icon.svg'
import logoutIcon from '../../../assets/logout-icon.svg'
import Logo from '@/components/shared/Logo/Logo'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const SellerNavbar = () => {

    const pathname = usePathname()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <div className={styles.topNavigation}>
        <Logo/>
        <div className={styles.menu_container}>
            <div className={pathname==='/seller/home' ? styles.active_menu_item : styles.menu_item}>
                <Link href={"/seller/home"} className={styles.menu_item_link}>Home</Link>
            </div>
            <div className={pathname==='/seller/history' ? styles.active_menu_item : styles.menu_item}>
                <Link href={"/seller/history"} className={styles.menu_item_link}>History</Link>
            </div>
            <div className={pathname==='/seller/payment' ? styles.active_menu_item : styles.menu_item}>
                <Link href={"/seller/payment"} className={styles.menu_item_link}>Payments</Link>
            </div>
            <div className={styles.menu_item}>
                <Link href={"/seller/notification"}>
                    <Image alt='notification icon' src={notificationIcon} height={30} width={30}/>
                </Link>
            </div>
            <div className={styles.menu_item}>
                <Image 
                    src={profileIcon} 
                    alt='profile icon'
                    height={30} 
                    width={30} 
                    style={{cursor: 'pointer'}}
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                />
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem style={{paddingTop: 0, paddingBottom: 0}} onClick={handleClose}>
                       <Link href={"/seller/profile"} className={styles.dropdown_item_link}>
                          <div className={styles.dropdown_item}>
                            <Image alt='user icon' src={userIcon} height={20} width={20}/>
                            <p>View Profile</p> 
                          </div>
                       </Link>
                    </MenuItem>
                    <MenuItem style={{paddingTop: 0, paddingBottom: 0}} onClick={handleClose}>
                          <div className={styles.dropdown_item}>
                            <Image alt='logout' src={logoutIcon} height={20} width={20}/>
                            <p>Logout</p>
                          </div>
                    </MenuItem>
                </Menu>
            </div>
        </div>
   </div>
  )
}

export default SellerNavbar
