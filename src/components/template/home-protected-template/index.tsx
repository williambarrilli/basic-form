"use client";
import React from "react";
import styles from "./styles.module.scss";
import EventList from "@/components/organisms/list-events";
import { getFindAllEvents } from "@/services/event.service";

export default function HomeProtectedTemplate() {
  getFindAllEvents();
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Bem-vindo à Home do usuario</h1>
          <p>Explore nossos recursos e descubra como podemos ajudar você.</p>
          <button className={styles.ctaButton}>Saiba Mais</button>
        </div>
      </section>
      <EventList />
    </div>
  );
}
