"use client";

import { Container } from "./global-layout.styles";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export default function GlobalLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}
