import React from 'react'
import styles from './index.module.css'
import Menu from '../menu'
import Users from '../users'
const Helps = () => {
  return (
    <div className={styles.control}>

    <Menu active={'helps'}/>
    <Users title={"Help"}/>
    </div>
  )
}

export default Helps