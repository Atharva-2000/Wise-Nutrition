"use client"

import React, { useEffect, useState } from 'react'
import styles from './BuyerHome.module.scss'
import searchIcon from '../../assets/search-icon.svg'
import Image from 'next/image'
import { Grid } from '@mui/material'
import ProductCard from '@/components/Buyer/ProductCard/ProductCard'

const page = () => {

  const [searchText, setSearchText] = useState('')

  const data = [
      {
         id: 'P001',
         name: 'Orange Juice',
         category: 'Juice',
         price: 50
      },
      {
         id: 'P002',
         name: 'Orange Juice',
         category: 'Juice',
         price: 50
      },
      {
        id: 'P003',
        name: 'Orange Juice',
        category: 'Juice',
        price: 50
      },
      {
        id: 'P004',
        name: 'Orange Juice',
        category: 'Juice',
        price: 50
      },
      {
        id: 'P005',
        name: 'Orange Juice',
        category: 'Juice',
        price: 50
      },
      {
       id: 'P006',
       name: 'Orange Juice',
       category: 'Juice',
       price: 50
      },
      {
        id: 'P007',
        name: 'Orange Juice',
        category: 'Juice',
        price: 50
      },
      {
       id: 'P008',
       name: 'Orange Juice',
       category: 'Juice',
       price: 50
      }
  ]

  const [productDetails, setProductDetails] = useState([])

  useEffect(()=>{
      setProductDetails(data)
  },[])

  return (
    <div className={styles.buyer_home_page}>
        <div className={styles.search_field}>
            <Image src={searchIcon} style={{cursor: 'pointer'}}/>
            <input placeholder='Search by product name or by category' name='searchText' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} className={styles.input_field}/>
        </div>
        <div className={styles.product_cards_container}> 
            <Grid container spacing={8}>
                {
                    productDetails.map((item, index)=>{
                         return(
                              <Grid key={index} item xs={3}>
                                  <ProductCard product={item}/>
                              </Grid>
                         )
                    })
                }
            </Grid>
        </div>
    </div>
  )
}

export default page
