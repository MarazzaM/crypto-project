import React from "react";
import styles from "../styles/Home.module.scss";
import CardContainer from "../components/CardContainer";
import Image from 'next/image'

function index() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.startup}>
        <h1>CRYPTO BROS</h1>
        <p>
          Cryptocurrency is a form of payment that can be exchanged online for
          goods and services. Many companies have issued their own currencies,
          often called tokens, and these can be traded specifically for the good
          or service that the company provides.
          <br />
          For that reason we come to tell you what this world is about.
        </p>
        <Image
            src="/../public/cryptobros.webp"
            alt="Picture of the author"
            width={300}
            height={200}
          />
      </div>
      <CardContainer />
    </div>
    </>
  );
}

export default index;
