"use client"

import React from 'react'
import Styles from './CustomButton.module.scss'

const CustomButton = ({title, onClick, styles}) => {
  return (
        <>
            <button className={`${Styles.custom_button}`} style={styles} onClick={onClick}>{title}</button>
        </>
  )
}

export default CustomButton
