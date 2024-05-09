"use client"

import React from 'react'
import styles from '../../../../styles/Navbar.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Logo from '@/components/shared/Logo/Logo'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import notificationIcon from '../../../../assets/notification-icon.svg';
import profileIcon from '../../../../assets/profile-icon.svg';
import userIcon from '../../../../assets/user-icon.svg';
import logoutIcon from '../../../../assets/logout-icon.svg';
import addToCartIcon from '../../../../assets/add-to-cart-icon.svg';
// import profileIcon from '../../../../assets/profile-icon.svg'
// import userIcon from '../../../../assets/user-icon.svg'
// import logoutIcon from '../../../../assets/logout-icon.svg'
// import addToCartIcon from '../../../../assets/add-to-cart-icon'

const LoginedBuyerNavbar = () => {

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
            <div className={pathname==='/buyer' ? styles.active_menu_item : styles.menu_item}>
                <Link href={"/buyer"} className={styles.menu_item_link}>Home</Link>
            </div>
            <div className={pathname==='/buyer/orders' ? styles.active_menu_item : styles.menu_item}>
                <Link href={"/buyer/orders"} className={styles.menu_item_link}>Orders</Link>
            </div>
            <div className={pathname==='/buyer/deliveries' ? styles.active_menu_item : styles.menu_item}>
                <Link href={"/buyer/deliveries"} className={styles.menu_item_link}>Deliveries</Link>
            </div>
            <div className={pathname==='/buyer/faq' ? styles.active_menu_item : styles.menu_item}>
                <Link href={"/buyer/faq"} className={styles.menu_item_link}>FAQs</Link>
            </div>
            <div className={styles.menu_item}>
                <Link href={"/buyer/cart"}>
                    <Image alt='add to cart icon' src={addToCartIcon} height={30} width={30}/>
                </Link>
            </div>
            <div className={styles.menu_item}>
                <Link href={"/buyer/notification"}>
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
                    <Link href={"/buyer/profile"} className={styles.dropdown_item_link}>
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

export default LoginedBuyerNavbar
