"use client";
import React from "react";
import styles from "./styles.module.scss";
import Header from "@/components/organisms/header";
import Footer from "@/components/organisms/footer";

export default function HomeTemplate() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Bem-vindo à Landing Page</h1>
            <p>Explore nossos recursos e descubra como podemos ajudar você.</p>
            <button className={styles.ctaButton}>Saiba Mais</button>
          </div>
          <div className={styles.heroImage}>
            {/* <Image src="/logo.png" alt="Hero" width={500} height={500} /> */}
          </div>
        </section>

        {/* Sobre */}
        <section id="about" className={styles.section}>
          <h2>Sobre Nós</h2>
          <p>
            Nossa missão é oferecer soluções incríveis para nossos clientes,
            ajudando a alcançar seus objetivos com facilidade e eficiência.
          </p>
          {/* <Image src="/about.png" alt="Sobre" width={800} height={400} /> */}
        </section>

        {/* Recursos */}
        <section id="features" className={styles.section}>
          <h2>Recursos</h2>
          <div className={styles.features}>
            <div className={styles.feature}>
              <h3>Fácil de Usar</h3>
              <p>Interface intuitiva e amigável para todos os usuários.</p>
            </div>
            <div className={styles.feature}>
              <h3>Alta Performance</h3>
              <p>Desempenho rápido e confiável em todas as plataformas.</p>
            </div>
            <div className={styles.feature}>
              <h3>Suporte 24/7</h3>
              <p>Equipe pronta para ajudar a qualquer momento.</p>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contact" className={styles.section}>
          <h2>Contato</h2>
          <p>Entre em contato conosco para mais informações.</p>
          <form className={styles.contactForm}>
            <input type="text" placeholder="Seu Nome" />
            <input type="email" placeholder="Seu Email" />
            <textarea placeholder="Sua Mensagem"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
}
