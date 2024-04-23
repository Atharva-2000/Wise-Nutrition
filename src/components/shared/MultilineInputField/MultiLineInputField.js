import React from 'react'
import styles from './MultiLineInput.module.scss'

const MultiLineInputField = ({name, value, placeholder, label, onChange, disabled=false, inputProps}) => {
  return (
     <>
        <div className={`${styles.multlineinput}`}>
            <label>{label}</label>
            <textarea  name={name} value={value} placeholder={placeholder} onChange={(e)=>{onChange(name, e.target.value )}} disabled={disabled} {...inputProps} ></textarea>
        </div>
     </>
  )
}

export default MultiLineInputField
