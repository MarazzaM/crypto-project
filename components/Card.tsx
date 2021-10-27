import React from 'react'
import styles from '../styles/Cards.module.scss';
import Link from 'next/link';

function Card(props:any) {

    return (
        <>
        <Link  href={props.path}>
        <div className={styles.Card} id={props.id}>
        {props.image}
        <h1 className={styles.title}>{props.title}</h1>
        </div>
        </Link>
        </>
    )
}

export default Card
