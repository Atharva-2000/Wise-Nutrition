import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './BuyerDeliveries.module.scss'

const TodaysDelivery = () => {

    const item_details = [
        {
            product_name : "Orange Juice",
            quantity : 5
        },
        {
            product_name : "Apple Juice",
            quantity : 2
        },
        {
            product_name : "Beet Juice",
            quantity : 1
        },
        {
            product_name : "Grape Juice",
            quantity : 2
        }
    ]

    const table_headers = ["Product", "Quantity"]

  return (
    <>
         <div className={styles.delivery_status_container}>
            <p className={styles.title}>Delivery Status</p>
            <div className={styles.delivery_status_field}>
                <div className={`${styles.status_indicator_circle} ${styles.dark}`}>1</div>
                <p className={styles.status_text}>Pickup of Items</p>
                <div style={{height: '1px', width: '350px', backgroundColor: '#ACACAC'}}></div>
                <div className={`${styles.status_indicator_circle} ${styles.light}`}>2</div>
                <p className={styles.status_text}>Delivery of Items</p>
            </div>
         </div>
         <div className={styles.item_details_container}>
            <p className={styles.title}>Item Details</p>
            <TableContainer style={{width: '40%'}} component={Paper}>
                {
                    item_details ?(
                        <Table>
                                <TableHead>
                                    <TableRow>
                                        {
                                            table_headers.map((title)=>(
                                                <TableCell  key={title} style={{backgroundColor: '#f2f2f2', fontWeight: 600}}>{title}</TableCell>
                                            ))
                                        }   
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        item_details.map((item, index)=>(
                                                <TableRow key={index}>
                                                    <TableCell>{item.product_name}</TableCell>
                                                    <TableCell>{item.quantity}</TableCell>
                                                </TableRow>
                                                )
                                            )
                                    }
                                </TableBody>
                            </Table>
                        ):(
                            <p>Data not available</p>
                        )
                    }
            </TableContainer>
         </div>
    </>
  )
}

export default TodaysDelivery
