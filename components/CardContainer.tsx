import React from 'react'
import Card from './Card'
import styles from '../styles/Cards.module.scss'

function CardsContainer() {

    const content =[
        {
          id:'c1',
          title: 'About',
          image:<i className='bx bx-group cardicon'></i>,
          path:'/About',
        },
        {
            id:'c2',
            title: 'Coins',
            image:<i className='bx bx-bitcoin cardicon'></i>,
            path:'/Coins',
          },
          {
            id:'c3',
            title: "NFT'S",
            image:<i className='bx  bx-bar-chart-square cardicon'></i>,
            path:'/NFT',
          },
          {
            id:'c4',
            title: 'News',
            image:<i className='bx bx-news cardicon'></i>,
            path:'/News',
          },
      ]
  
    return (
        <div className={styles.container}>
            <Card 
            title={content[0].title}
            image={content[0].image}
            path={content[0].path}
            id={content[0].id}
            />
            <Card 
            title={content[1].title}
            image={content[1].image}
            path={content[1].path}
            id={content[1].id}
            />
            <Card 
            title={content[2].title}
            image={content[2].image}
            path={content[2].path}
            id={content[2].id}
            />
            <Card 
            title={content[3].title}
            image={content[3].image}
            path={content[3].path}
            id={content[3].id}
            />
        </div>
    )
}

export default CardsContainer
