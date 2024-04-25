import React from 'react'
import styles from './SellerPayment.module.scss'
import PaymentsTable from './PaymentsTable'

const page = () => {
  return (
    <div className={styles.payment_page}>
        <p className={styles.title}>Month-wise Record Of Payments</p>
        <PaymentsTable/>
    </div>
  )
}

export default page
