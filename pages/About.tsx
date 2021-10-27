import React from "react";
import styles from './../styles/About.module.scss';

function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What is <span>Crypto</span>?</h1>
      <p className={styles.text}>
        A cryptocurrency is a digital or virtual currency that is secured by
        cryptography, which makes it nearly impossible to counterfeit or
        double-spend. Many cryptocurrencies are decentralized networks based on
        blockchain technology—a distributed ledger enforced by a disparate
        network of computers. A defining feature of cryptocurrencies is that
        they are generally not issued by any central authority, rendering them
        theoretically immune to government interference or manipulation.
      </p>
    </div>
  );
}

export default About;
