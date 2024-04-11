import React from 'react'
import styles from './PrimaryButton.module.scss'

const PrimaryButton = ({title, onClick}) => {
  return (
   <>
      <button className={`${styles.primary_button}`} onClick={onClick}>{title}</button>
   </>
  )
}

export default PrimaryButton
