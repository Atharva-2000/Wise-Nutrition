import React from 'react'
import styles from './OutlinedButton.module.scss'

const OulinedButton = ({title, onClick}) => {
  return (
   <>
        <button className={`${styles.outlined_button}`} onClick={onClick}>{title}</button> 
   </>
  )
}

export default OulinedButton
