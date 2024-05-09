"use client"

import React, { useState } from 'react'
import styles from './BuyerOrders.module.scss'
import tabStyles from '../../../styles/Tabs.module.scss'
import ActiveOrdersTable from './ActiveOrdersTable'
import CompletedOrdersTable from './CompletedOrdersTable'
import CancelledOrdersTable from './CancelledOrdersTable'

const page = () => {

    const tabs = ["Active Orders", "Completed Orders", "Cancelled Orders"]

    const [activeTab, setActiveTab] = useState(tabs[0])

    const handleTabChange = (tabName)=>{
        setActiveTab(tabName)
    }

  return (
    <div className={styles.orders_page}>
        <div className={tabStyles.tabContainer}>
            {
                tabs.map((tab, index)=>(
                    <div key={tab} className={`${tabStyles.tab} ${tab===activeTab ? tabStyles.active : ''}`} onClick={()=>{handleTabChange(tab)}}>{tab}</div>
                ))
            }
        </div>
        <div>
            <div className={activeTab===tabs[0] ? tabStyles.visible : tabStyles.not_visible}>
                <ActiveOrdersTable/>
            </div>
            <div className={activeTab===tabs[1] ? tabStyles.visible : tabStyles.not_visible}>
                <CompletedOrdersTable/>
            </div>
            <div className={activeTab===tabs[2] ? tabStyles.visible : tabStyles.not_visible}>
                <CancelledOrdersTable/>
            </div>
        </div>
    </div>
  )
}

export default page
