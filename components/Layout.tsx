import styles from  '../styles/Layout.module.scss'
import Nav from './Nav'
import Footer from './Footer'

function Layout({children}:any) {
    return (
        <>
        <Nav />
        <div className={styles.container}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
        <Footer />
        </>
    )
}

export default Layout
