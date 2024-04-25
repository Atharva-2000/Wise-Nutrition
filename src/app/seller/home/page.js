import React from 'react'
import styles from './SellerHome.module.scss'
import TodaysOrderTable from './TodaysOrderTable';
import TommorowOrderTable from './TommorowOrderTable';

const page = () => {

  const current_hour = (new Date()).getHours()

  return (
    <div className={styles.home_page}>
        <p className={styles.title}>{current_hour>=18 ? "Tommorow's" : "Today's"} Orders</p>
        {
            current_hour>=18 ? (<TommorowOrderTable/>) : (<TodaysOrderTable/>)
        }
    </div>
  )
}

export default page
