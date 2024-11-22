import SideMenu from "@/components/organisms/side-menu";
import type { Metadata } from "next";

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
    <div>
        <SideMenu/>
        {children}
    </div>
  )
}
