import React from "react";
import styles from "./styles.module.scss";

export default function HomeProtectedTemplate() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Bem-vindo à Home do usuario</h1>
          <p>Explore nossos recursos e descubra como podemos ajudar você.</p>
          <button className={styles.ctaButton}>Saiba Mais</button>
        </div>
        <div className={styles.heroImage}>
          {/* <Image
            src="/hero-image.jpg"
            alt="Hero"
            width={500}
            height={500}
    
          /> */}
        </div>
      </section>
    </div>
  );
}
