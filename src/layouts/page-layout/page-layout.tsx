"use client";

import { Container } from "./page-layout.styles";

export default function PageLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Container>{children}</Container>;
}
