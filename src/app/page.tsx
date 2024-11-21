import HomeTemplate from "@/components/template/home-template";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeTemplate/>;
    </div>
  );
}
