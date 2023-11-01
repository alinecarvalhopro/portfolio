import "./Styles/globals.scss";
import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfólio Aline Carvalho",
  description: "Desenvolvedora Web e Mobile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={jost.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
