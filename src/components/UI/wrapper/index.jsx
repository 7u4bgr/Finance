import React from 'react'
import styles from './index.module.css'
const Wrapper = ({children}) => {
  return (
    <div className={styles.div}>{children}</div>
  )
}

export default Wrapper