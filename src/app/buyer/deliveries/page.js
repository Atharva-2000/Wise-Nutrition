"use client"

import React, {useState} from 'react'
import tabStyles from '../../../styles/Tabs.module.scss'
import styles from './BuyerDeliveries.module.scss'
import PastDeliveriesTable from './PastDeliveriesTable'
import TodaysDelivery from './TodaysDelivery'

const page = () => {

    const tabs = ["Today’s Delivery", "Past Deliveries"]

    const [activeTab, setActiveTab] = useState(tabs[0])

    const handleTabChange = (tabName)=>{
        setActiveTab(tabName)
    }

  return (
    <div className={styles.deliveries_page}>
        <div className={tabStyles.tabContainer}>
            {
                tabs.map((tab, index)=>(
                    <div key={tab} className={`${tabStyles.tab} ${tab===activeTab ? tabStyles.active : ''}`} onClick={()=>{handleTabChange(tab)}}>{tab}</div>
                ))
            }
        </div>
        <div>
            <div className={activeTab===tabs[0] ? tabStyles.visible : tabStyles.not_visible}>
                <TodaysDelivery/>
            </div>
            <div className={activeTab===tabs[1] ? tabStyles.visible : tabStyles.not_visible}>
                <PastDeliveriesTable/>
            </div>
        </div>      
    </div>
  )
}

export default page
