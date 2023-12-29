// pages/index.js
import React from 'react';
import styles from './styles.module.css';
import Image from "next/image";
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Welcome to dsysd.dev</h1>
        <Image 
            src="/dsysd_logo.png" 
            alt="Hero Image"
            className={styles.heroImage}
            width={200}
            height={200}
        />
        <Link href='/posts'>
            <button className={styles.getStartedButton}>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
