"use client";

import { Container } from "./global-layout.styles";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { theme } from "@/styles/theme";

export default function GlobalLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <Header />
      {/* TODO: This is here while waiting for the PageLayout component */}
      <div
        style={{
          minHeight: "calc(100vh - 333px)",
          boxShadow: `${theme.elevations[2]}`
        }}
      >
        {children}
      </div>
      <Footer />
    </Container>
  );
}
