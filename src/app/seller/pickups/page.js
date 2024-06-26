"use client"

import React, { useState } from 'react'
import styles from './SellerPickups.module.scss'
import tabStyles from '../../../styles/Tabs.module.scss'
import PastPickupsTable from './PastPickupsTable'
import TodaysPickupsTable from './TodaysPickupsTable'

const page = () => {

    const tabs = ["Today's Pickups", "Past Pickups"]

    const [activeTab, setActiveTab] = useState(tabs[0])

    const handleTabChange = (tabName)=>{
        setActiveTab(tabName)
    }

  return (
    <div className={styles.pickups_page}>
        <div className={tabStyles.tabContainer}>
            {
                tabs.map((tab, index)=>(
                    <div key={tab} className={`${tabStyles.tab} ${tab===activeTab ? tabStyles.active : ''}`} onClick={()=>{handleTabChange(tab)}}>{tab}</div>
                ))
            }
        </div>
        <div>
            <div className={activeTab===tabs[0] ? tabStyles.visible : tabStyles.not_visible}>
                <TodaysPickupsTable/>
            </div>
            <div className={activeTab===tabs[1] ? tabStyles.visible : tabStyles.not_visible}>
                <PastPickupsTable/>
            </div>
        </div>
    </div>
  )
}

export default page
