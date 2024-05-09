import React from 'react'
import styles from './ProductCard.module.scss'
import Image from 'next/image'
import productIcon from '../../../assets/product-image.svg'
import rupeeIcon from '../../../assets/rupee-icon.svg'
import Link from 'next/link'

const ProductCard = ({product}) => {
  return (
    <div className={styles.product_card}>
         <Image src={productIcon}/>
         <p className={styles.product_name}>{product.name}</p>
         <div className={styles.product_price}><Image src={rupeeIcon} height={20}/><p style={{fontSize: '20px'}}>{product.price}</p></div>
         <Link href={`/buyer/${product.id}`} className={styles.view_details_button}>View Details</Link>
    </div>
  )
}

export default ProductCard
