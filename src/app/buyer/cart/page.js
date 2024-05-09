import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from './MyCart.module.scss'
import Image from 'next/image';
import rupeeIcon from '../../../assets/rupee-icon.svg'
import editIcon from '../../../assets/edit-icon.svg'
import deleteIcon from '../../../assets/delete-icon.svg'
import PrimaryButton from '@/components/shared/Button/PrimaryButton/PrimaryButton';

const page = () => {

    const cart_data = {

         cart_items_details : [
            {
                product_name : "Orange Juice",
                subscription_type : "Monthly",
                delivery_type : "Daily",
                quantity : 30,
                amount : 1250
            },
            {
                product_name : "Apple Juice",
                subscription_type : "Monthly",
                delivery_type : "Alternate Days",
                quantity : 15,
                amount : 330
            },
            {
                product_name : "Beet Juice",
                subscription_type : "Monthly",
                delivery_type : "Custom - Tuesday",
                quantity : 4,
                amount : 175
            },
            {
                product_name : "Grape Juice",
                subscription_type : "Weekly",
                delivery_type : "Daily",
                quantity : 7,
                amount : 300
            }
        ],

        order_summary : {
            subtotal : 2055,
            delivery_cost : 600
        }
    }

    const table_headers = ["Product", "Subscription", "Delivery Type", "Quantity", "Amount", "Action"]

  return (
    <div className={styles.my_cart_page}>
         <p className={styles.title}>My Cart</p>
         <TableContainer component={Paper}>
                {
                    cart_data.cart_items_details ?(
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
                                        cart_data.cart_items_details.map((item, index)=>(
                                                <TableRow key={index}>
                                                    <TableCell sx={{py:0}}>{item.product_name}</TableCell>
                                                    <TableCell sx={{py:0}}>{item.subscription_type}</TableCell>
                                                    <TableCell sx={{py:0}}>{item.delivery_type}</TableCell>
                                                    <TableCell sx={{py:0}}>{item.quantity}</TableCell>
                                                    <TableCell sx={{py:0}}>
                                                        <div className={styles.price_field}>
                                                            <Image src={rupeeIcon} height={15} width={15}/>
                                                            <p>{item.amount}</p>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell sx={{py:0}}>
                                                        <div className={styles.action_field}>
                                                            <Image src={editIcon} height={20} width={20}/>
                                                            <Image src={deleteIcon} height={20} width={20}/>
                                                        </div>
                                                    </TableCell>
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

            <div className={styles.order_summary_card}>
                <p className={styles.order_summary_title}>Order Summary</p>
                <div className={styles.order_summary_field}>
                    <p className={styles.order_summary_field_text}>Sub Total</p>
                    <div className={styles.price_field}>
                       <Image src={rupeeIcon} height={17} width={17}/>
                       <p className={styles.order_summary_field_text}>{cart_data.order_summary.subtotal}</p>
                    </div>
                </div>
                <div className={styles.order_summary_field}>
                    <p className={styles.order_summary_field_text}>Delivery Cost</p>
                    <div className={styles.price_field}>
                       <Image src={rupeeIcon} height={17} width={17}/>
                       <p className={styles.order_summary_field_text}>{cart_data.order_summary.delivery_cost}</p>
                    </div>
                </div>
                <div className={styles.order_summary_field}>
                    <p className={styles.total_text}>Total</p>
                    <div className={styles.price_field}>
                       <Image src={rupeeIcon} height={17} width={17}/>
                       <p className={styles.order_summary_field_text}>{cart_data.order_summary.subtotal+cart_data.order_summary.delivery_cost}</p>
                    </div>
                </div>
                <div style={{marginTop: '10px'}}>
                    <center>
                        <PrimaryButton title={'Proceed to Checkout'}/>
                    </center>
                </div>
            </div>
    </div>
  )
}

export default page
