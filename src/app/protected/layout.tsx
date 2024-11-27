import SideMenu from "@/components/organisms/side-menu";
import type { Metadata } from "next";
import styles from "./styles.module.scss";

export const metadata: Metadata = {
  title: "Projeto",
  description: "Loading...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className={styles.container}>
        <SideMenu />
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
}
