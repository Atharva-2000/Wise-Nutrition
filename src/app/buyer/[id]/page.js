"use client"

import React, { useEffect, useState } from 'react'
import styles from './ProductDetails.module.scss'
import Image from 'next/image'
import productImage from '../../../assets/product-image.svg'
import rupeeIcon from '../../../assets/rupee-icon.svg'
import CustomButton from '@/components/shared/Button/CustomButton/CustomButton'
import PrimaryButton from '@/components/shared/Button/PrimaryButton/PrimaryButton'
import { token } from '@/utils/constants'
import SubscriptionModal from '@/components/Buyer/SubscriptionModal/SubscriptionModal'

const page = ({params}) => {

   const data = {
        name : "Orange Juice",
        category : "Juice",
        quantity : "700 ml",
        price : 50,
        consumption_time : "1 Day",
        description : "Lorem ipsum dolor sit amet. Et corrupti fugiat eos distinctio odio 33 velit nemo eum odit minus et optio consequatur ."
   }

   const [productDetails, setProductDetails] = useState({})

   const [isSubscriptionModalVisible, setIsSubscriptionModalVisible] = useState(false)

   const handleSubscriptionModalVisibility = ()=>{
       setIsSubscriptionModalVisible(!isSubscriptionModalVisible)
   }

   useEffect(()=>{
      setProductDetails(data)
   },[])

  return (
    <div className={styles.product_details_page}>
        <p className={styles.title}>Product Details</p>
        <div className={styles.product_details_card}>
           <Image src={productImage}/>
           <div className={styles.product_details_container}>
                <div className={styles.product_details_row}>
                    <div className={styles.product_details_field}>
                        <p className={styles.product_details_field_title}>Product Name :</p>
                        <p>{productDetails.name}</p>
                    </div>
                    <div className={styles.product_details_field}>
                        <p className={styles.product_details_field_title}>Product Category :</p>
                        <p>{productDetails.category}</p>
                    </div>
                </div>
                <div className={styles.product_details_row}>
                    <div className={styles.product_details_field}>
                        <p className={styles.product_details_field_title}>Quantity (per unit) :</p>
                        <p>{productDetails.quantity}</p>
                    </div>
                    <div className={styles.product_details_field}>
                        <p className={styles.product_details_field_title}>Price (per unit) :</p>
                        <div className={styles.price_field}>
                            <Image src={rupeeIcon} height={15}/>
                            <p>{productDetails.price}</p>
                        </div>
                    </div>
                </div>
                {/* <div className={styles.product_details_row}>
                    <div className={styles.product_details_field}>
                        <p className={styles.product_details_field_title}>Consumption Time :</p>
                        <p>{productDetails.consumption_time}</p>
                    </div>
                </div> */}
                <div className={styles.product_details_row}>
                    <div>
                        <p className={styles.product_details_field_title}>Product Description :</p>
                        <p>{productDetails.description}</p>
                    </div>
                </div>
                <div className={styles.buttons_container}>
                    <CustomButton 
                      title={'Order Now'} 
                      styles={{border: '2px solid #10808B', backgroundColor: 'white', fontWeight: '600', color: '#10808B'}}
                      onClick={handleSubscriptionModalVisibility}
                    />
                    {
                        token && <PrimaryButton title={'Add to Cart'} onClick={handleSubscriptionModalVisibility}/>
                    }
                </div>
           </div>
        </div>
        <SubscriptionModal isVisible={isSubscriptionModalVisible} handleSubscriptionModalVisibility={handleSubscriptionModalVisibility}/>
    </div>
  )
}

export default page
