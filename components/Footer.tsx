import React from 'react'
import styles from './../styles/Footer.module.scss'
import Card from './Card'
import Image from 'next/image'
function Footer() {
    const content =[
        {
            id:'d1',
            image:<Image
            src="/../public/cryptobros.webp"
            alt="Picture of the author"
            width={100}
            height={100}
          />,
            path:"/",
            title:"Title",
        }
    ]
    return (
        <div className={styles.container}>
            <p className={styles.warning}><i className='bx bx-message-square-error'></i> DESCARGO DE RESPONSABILIDAD IMPORTANTE: Todo el contenido disponible en nuestro sitio web, en los sitios web hipervinculados, y en las aplicaciones, foros, blogs, cuentas de redes sociales y otras plataformas asociados ("Sitio") tienen como único objetivo proporcionarle información general procedente de fuentes externas. No ofrecemos garantías de ningún tipo en lo que respecta a nuestro contenido, y esto incluye, aunque no se limita únicamente a eso, la exactitud y vigencia de la información. Ninguna parte del contenido que ofrecemos debe interpretarse como un asesoramiento financiero, jurídico o de cualquier otro tipo en el que pueda basarse de forma específica para la consecución de algún propósito. Cualquier utilización o dependencia que haga de nuestro contenido correrá exclusivamente por su cuenta y riesgo. Lo que usted debería hacer es llevar a cabo sus propias investigaciones, revisiones y análisis, y verificar nuestro contenido antes de basarse en él. El comercio es una actividad de alto riesgo que puede resultar en pérdidas importantes, por lo que debe consultar con su asesor financiero antes de tomar ninguna decisión. Ningún contenido de nuestro Sitio debe considerarse una invitación u oferta para realizar una acción.</p>
            <div className={styles.footerContent}> 
            <Card
            title={content[0].title}
            image={content[0].image}
            path={content[0].path}
            id={content[0].id}
            />
            <div className={styles.aboutShort}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iure esse quasi eligendi facilis amet perferendis eius unde quam temporibus obcaecati consequatur cumque deserunt, voluptatem pariatur nesciunt, explicabo, sit rem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores rem fugit vitae voluptate qui, non ex ducimus molestiae reprehenderit consequuntur nam, nihil harum odio cum. Eius, iste quas. Veritatis, reprehenderit!</div>
            <div className={styles.footerSections}>
                <ul>
                    <li>About Us</li>
                    <li>Coins</li>
                    <li>NFT's</li>
                    <li>News</li>
                </ul>
            </div>
            <div className={styles.footerSubscription}></div>
            </div>
        </div>

    )
}

export default Footer
