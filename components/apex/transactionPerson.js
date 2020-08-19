import React from 'react'
import styles from './transactionPerson.module.css'

function Transaction({id="123",name="Mertcan Köse",date="16.06.2000",amount="32$"}){
    return (
        <div className={styles.box}>
            <span className={styles.id}>{id}</span>
            <img src='https://picsum.photos/35/35' alt=""/>
            <span className={styles.name}>{name}</span>
            <span className={styles.date}>{date}</span>
            <span className={styles.amount}>{amount}</span>
            <span>...</span>
        </div>
    )
}

export default Transaction