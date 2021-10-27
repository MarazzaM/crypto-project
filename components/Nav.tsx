import React from 'react'
import { useRouter } from "next/router";
import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Nav.module.scss';
import Head from 'next/head';

function Nav() {
    const router = useRouter(); //Router for color on active
    const [active, setActive] = useState(false) //navbar mobile useState
    return (
        <>
        <Head>
        <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'/>
        </Head>
        <div>
            <nav className={active ? "mactive nav" : "nav"}>
                <div className="logo" onClick={()=> setActive(false)}>
                    <Link href="/">
                        CryptoBros
                    </Link>
                </div>
                <ul>
                    <li className={router.pathname == "/" ? "active" : ""} onClick={()=> setActive(false)}>
                        <Link href="/">
                        Home
                        </Link>
                    </li>

                    <li className={router.pathname == "/About" ? "active" : ""} onClick={()=> setActive(false)}>
                        <Link href="/About">
                            About
                        </Link>
                    </li>

                    <li className={router.pathname == "/Coins" ? "active" : ""} onClick={()=> setActive(false)}>
                        <Link href="/Coins">
                            Coins
                        </Link>
                    </li>

                    <li  className={router.pathname == "/NFT" ? "active" : ""} onClick={()=> setActive(false)}>
                        <Link href="/NFT">
                        NFT's
                        </Link>
                    </li>
                    <li  className={router.pathname == "/News" ? "active" : ""} onClick={()=> setActive(false)}>
                        <Link href="/News">
                        News
                        </Link>
                    </li>
                    <li id='closebtn'><i className='bx bx-x-circle' onClick={()=> setActive(!active)}></i>
                </li>
                </ul>
                <div className="menuicon">
                     <i className='bx bx-menu-alt-right'  onClick={()=> setActive(!active)}></i>
                </div>
            </nav>
        </div>
        </>
    )
}

export default Nav
